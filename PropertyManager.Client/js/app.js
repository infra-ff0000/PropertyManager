angular.module('app', ['ui.router', 'ng-Resource']).config(function ($stateProvider, $urlProvider){
    $urlProvider.otherwise('/dashboard');
    
    
    $stateProvider ('/dashboard', { url: '/dashboard', templateURL: '/templates/dashboard/dashboard.html'})

    .state ('property', {abstract: true, url: '/property', template: '<ui-view>' })
    .state ('property.grid', {abstract: true, url: '/grid', templateURL: '/templates/property/grid.html', controller: 'PropertyGridController' })
    .state ('property.detail', {abstract: true, url: '/detail/:id', templateURL: '/templates/property/detail.html', controller: 'PropertyDetailController' })

    .state ('tenant', {abstract: true, url: '/tenant', template: '<ui-view>' })
    .state ('tenant.grid', {abstract: true, url: '/grid', templateURL: '/templates/tenant/grid.html', controller: 'TenantGridController' })
    .state ('tenant.detail', {abstract: true, url: '/detail/:id', templateURL: '/templates/tenant/detail.html', controller: 'TenantDetailController' })

    .state ('lease', {abstract: true, url: '/lease', template: '<ui-view>' })
    .state ('lease.grid', {abstract: true, url: '/grid', templateURL: '/templates/lease/grid.html', controller: 'LeaseGridController' })
    .state ('lease.detail', {abstract: true, url: '/detail/:id', templateURL: '/templates/lease/detail.html', controller: 'LeaseDetailController' });


    
});
    angular.module('app').value('apiUrl', 'http://localhost:49651/api/');