<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use App\Models\ProdukModel;

class ProdukController extends ResourceController
{
    public function index($category = null)
    {
        $model = new ProdukModel();

        if ($category) {
            // Jika kategori diberikan, ambil produk berdasarkan kategori
            $data['produk'] = $model->where('category', $category)->findAll();
        } else {
            // Jika tidak ada kategori, ambil semua produk
            $data['produk'] = $model->findAll();
        }

        return $this->respond($data);
    }
    public function show($id = null)
{
    $model = new ProdukModel();
    $product = $model->find($id);

    if ($product) {
        return $this->respond($product);
    } else {
        return $this->failNotFound('Product not found.');
    }
}


public function create()
{
    if ($this->request->getMethod() === 'options') {
        // Handle OPTIONS request (tidak perlu validasi atau penyimpanan data)
        return $this->response->setStatusCode(200);
    }

    helper(['form']);
    $rules = [
        'nama_produk' => 'required',
        'deskripsi_produk' => 'required',
        'harga_produk' => 'required',
        'gambar_produk' => 'uploaded[gambar_produk]|max_size[gambar_produk,1024]|is_image[gambar_produk]|mime_in[gambar_produk,image/jpg,image/jpeg,image/png]',
        'category' => 'required', // Tambahkan aturan validasi untuk kategori
    ];

    if (!$this->validate($rules)) {
        return $this->response->setStatusCode(400)->setJSON(['error' => $this->validator->getErrors()]);
    }

    $gambar = $this->request->getFile('gambar_produk');
    $namaGambar = $gambar->getRandomName();
    $gambar->move('gambar', $namaGambar);

    $data = [
        'nama_produk' => $this->request->getVar('nama_produk'),
        'deskripsi_produk' => $this->request->getVar('deskripsi_produk'),
        'harga_produk' => $this->request->getVar('harga_produk'),
        'gambar_produk' => $namaGambar,
        'category' => $this->request->getVar('category'), // Ambil nilai kategori dari request
    ];

    $model = new ProdukModel();
    $model->insert($data);

    $response = [
        'status' => 200,
        'error' => null,
        'messages' => [
            'success' => 'Data Inserted'
        ]
    ];

    return $this->response->setJSON($response);
}



    public function delete($id = null)
    {
        // Membuat instance dari ProdukModel
        $produkModel = new ProdukModel();

        // Mencari produk dengan $id yang diberikan
        $produk = $produkModel->find($id);

        // Memeriksa apakah produk dengan $id ditemukan
        if ($produk) {
            // Mencoba menghapus produk dengan $id yang diberikan
            $proses = $produkModel->delete($id);

            // Memeriksa apakah proses penghapusan berhasil
            if ($proses) {
                // Jika berhasil, persiapkan respons sukses
                $response = [
                    'status' => 200,
                    'messages' => 'Data berhasil dihapus',
                ];
            } else {
                // Jika penghapusan gagal, persiapkan respons kegagalan
                $response = [
                    'status' => 402,
                    'messages' => 'Gagal menghapus data',
                ];
            }
            // Mengembalikan respons
            return $this->respond($response);
        } else {
            // Jika produk dengan $id tidak ditemukan, kembalikan respons 404 Not Found
            return $this->failNotFound('Data tidak ditemukan');
        }
    }
}