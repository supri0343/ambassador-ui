export class Index {
    configureRouter(config, router) {
        config.map([
            { route: ['', 'list'], moduleId: './list', name: 'list', nav: true, title: 'List: Laporan Pengeluaran Gudang Sisa Aval' }
        ]);
        this.router = router;
    }
}
