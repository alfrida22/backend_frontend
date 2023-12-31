<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->resource('user', ['controller' => 'userController']);
$routes->match(['post', 'options'], 'api/register', 'userController::create');
$routes->match(['put', 'options'], 'update/user/(:segment)','userController::update/$1');
$routes->match(['delete', 'options'], 'delete/user/(:segment)','userController::deleteUser/$1');
$routes->get('api/total-users', 'userController::totalUsers');

$routes->resource('produk', ['controller' => 'ProdukController']);
$routes->get('produk/(:segment)', 'ProdukController::show/$1');
$routes->match(['post', 'options'], 'api/produk', 'ProdukController::create');
$routes->match(['delete', 'options'], 'delete/produk/(:segment)', 'ProdukController::delete/$1');

$routes->match(['post', 'options'], 'login', 'LoginController::login');
$routes->post('logout', 'UserController::logout');

// app/Config/Routes.php

// app/Config/Routes.php

$routes->resource('api/cart', ['controller' => 'CartController']);
$routes->post('api/cart/add/(:num)', 'CartController::addToCart/$1');
$routes->delete('api/cart/delete/(:num)', 'CartController::deleteItem/$1');
$routes->get('api/cart/total', 'CartController::getTotal');


$routes->resource('orders', ['controller' => 'OrdersController']);
$routes->match(['post', 'options'], 'api/order', 'OrdersController::createOrder');
$routes->match(['delete', 'options'], 'delete/order/(:segment)', 'OrdersController::delete/$1');
$routes->match(['post', 'options'], 'updateStatus/(:segment)', 'OrdersController::updateStatus/$1');

$routes->resource('delivery', ['controller' => 'DeliveryController']);
$routes->match(['post', 'options'], 'api/delivery', 'DeliveryController::create');
$routes->match(['put', 'options'], 'api/delivery/update/(:segment)', 'DeliveryController::update/$1');
$routes->match(['delete', 'options'], 'api/delivery/delete/(:segment)', 'DeliveryController::delete/$1');


$routes->resource('admin', ['controller' => 'AdminController']);
$routes->match(['post', 'options'], 'admin/register', 'AdminController::create');
$routes->match(['post', 'options'], 'admin/login', 'LoginAdmin::login');
$routes->match(['put', 'options'], 'update/admin/(:segment)','AdminController::update/$1');
$routes->match(['delete', 'options'], 'delete/admin/(:segment)','AdminController::deleteUser/$1');