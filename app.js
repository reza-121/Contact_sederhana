const { argv } = require("process");
const yargs = require("yargs");
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demanOption: true,
            type: 'string',
        },
        email: {
            describe: 'email',
            demanOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'Nomor Handphone',
            demanOption: true,
            type: 'string',
        },
    },

    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP,)
    },
})
    .demandCommand();

//menampilkan daftar semua nama & no hp contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler() {
        contacts.listContact();

    },
});

//menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan Detail sebuah contact berdasarkan nama',
    builder:{
        nama: {
            describe: 'Nama Lengkap',
            demanOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    },
});

yargs.parse();

