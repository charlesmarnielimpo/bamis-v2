<?php

declare(strict_types=1);

use App\Http\Controllers\Admin\DivisionController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified', 'check_status', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::resource('divisions', DivisionController::class)->only('index', 'store', 'update', 'destroy');
});
