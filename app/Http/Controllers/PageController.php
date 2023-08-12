<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index() {
        return Inertia::render('Home');
    }

    public function carInfo() {
        return Inertia::render('Mobil');
    }

    public function history(string $id) {
        $order = new OrderCollection(Order::orderBy('id', 'desc')->where('user_id', $id)->get());
        return Inertia::render('History', ['data'=>$order]);
    }

    public function order(string $value) {
        return Inertia::render('Order', ['value'=>$value]);
    }

    public function submit(Request $request) {
        $total = $request->harga * $request->durasi;
        $order = new Order();
        $order->user_id = $request->userId;
        $order->mobil = $request->mobil;
        $order->tanggal = $request->tanggal;
        $order->kembali = $request->kembali;
        $order->harga = $total;
        $order->save();
        return to_route('index');
    }
}
