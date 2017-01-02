
app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
            // Satellizer configuration that specifies which API
            // route the JWT should be retrieved from
            $authProvider.loginUrl = '/api/authenticate';
            // Redirect to the auth state if any other states
            // are requested other than users
            $urlRouterProvider.otherwise('/auth');
            $stateProvider
            .state('layout', {
                    templateUrl: '/app/modules/shared/template.html',
                })
                .state('auth', {
                    url: '/auth',
                    templateUrl: '/app/modules/auth/views/authView.html',
                    controller: 'AuthController as auth'
                })
                .state('layout.users', {
                    url: '/users',
                    templateUrl: '/app/modules/users/views/userView1.html',
                    controller: 'UserController as user'
                });
        });
