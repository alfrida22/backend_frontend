<?php

namespace App\Controllers;

use App\Models\UserModel; // Sesuaikan dengan nama model yang sesuai
use CodeIgniter\RESTful\ResourceController;
use Firebase\JWT\JWT;

class UserController extends ResourceController
{
    protected $format = 'json';

    public function index()
{
    $model = new UserModel(); // Ganti UserModel dengan nama model yang sesuai
    $data = $model->findAll(); // Mengambil data dari model, sesuaikan dengan metode yang sesuai

    $userCount = count($data);

    if (!empty($data)) {
        $response = [
            'status' => 'success',
            'message' => 'Data retrieved successfully',
            'total_users' => $userCount, // Menambahkan jumlah pengguna ke respons
            'data' => $data
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'No data found',
            'total_users' => 0, // Menambahkan jumlah pengguna ke respons dengan nilai default 0
            'data' => []
        ];
    }

    return $this->respond($response);
}

    public function create() {
        if ($this->request->getMethod() === 'options') {
            // Handle OPTIONS request (tidak perlu validasi atau penyimpanan data)
            return $this->response->setStatusCode(200);
        }
    
        helper(['form']);
        $rules = [
            'email' => 'required',
            'password' => 'required',
            'name' => 'required'
        ];
    
        if (!$this->validate($rules)) {
            return $this->fail($this->validator->getErrors());
        }
    
        $data = [
            'email' => $this->request->getVar('email'),
            'password' => password_hash($this->request->getVar('password'), PASSWORD_DEFAULT),
            'name' => $this->request->getVar('name')
        ];
    
        $model = new UserModel();
        $model->insert($data);
    
        $response = [
            'status' => 200, // Change status code to 200 (Created)
            'error' => null,
            'messages' => [
                'success' => "Data Inserted"
            ]
        ];
    
        return $this->respondCreated($response);
    }
    
    // // userController.php

//     public function create()
// {
//     if ($this->request->getMethod() === 'options') {
//         // Handle OPTIONS request (tidak perlu validasi atau penyimpanan data)
//         return $this->response->setStatusCode(200);
//     }

//     helper(['form']);
//     $rules = [
//         'email' => 'required',
//         'password' => 'required',
//         'name' => 'required',
//         'foto_profile' => 'uploaded[foto_profile]|max_size[foto_profile,1024]|is_image[foto_profile]|mime_in[foto_profile,image/jpg,image/jpeg,image/png]',
//         // 'category' => 'required', // Tambahkan aturan validasi untuk kategori
//     ];

//     if (!$this->validate($rules)) {
//         return $this->response->setStatusCode(400)->setJSON(['error' => $this->validator->getErrors()]);
//     }

//     $gambar = $this->request->getFile('foto_profile');
//     $namaGambar = $gambar->getRandomName();
//     $gambar->move('gambar', $namaGambar);

//     $data = [
//         'email' => $this->request->getVar('email'),
//         'password' => $this->request->getVar('password'),
//         'name' => $this->request->getVar('name'),
//         'foto_profile' => $namaGambar,
//         // 'category' => $this->request->getVar('category'), // Ambil nilai kategori dari request
//     ];

//     $model = new UserModel();
//     $model->insert($data);

//     $response = [
//         'status' => 200,
//         'error' => null,
//         'messages' => [
//             'success' => 'Data Inserted'
//         ]
//     ];

//     return $this->response->setJSON($response);
// }

// public function update($id = null)
// {
//     $userModel = new UserModel();
//     $user = $userModel->find($id);

//     if ($user) {
//         $data = [
//             'email' => $this->request->getVar('email'),
//             'password' => $this->request->getVar('password'),
//             'name' => $this->request->getVar('name'),
//             'foto_profile' => $this->request->getVar('foto_profile'),
//         ];

//         // Hanya perbarui kolom yang diberikan
//         $proses = $userModel->update($id, $data);

//         if ($proses) {
//             $response = [
//                 'status' => 200,
//                 'messages' => 'Data berhasil diubah',
//                 'data' => $data,
//             ];
//         } else {
//             $response = [
//                 'status' => 402,
//                 'messages' => 'Gagal diubah',
//             ];
//         }

//         return $this->respond($response);
//     }

//     return $this->failNotFound('Data tidak ditemukan');
// }

public function update($id = null)
{
    if ($this->request->getMethod() === 'options') {
        // Handle OPTIONS request (tidak perlu validasi atau penyimpanan data)
        return $this->response->setStatusCode(200);
    }

    helper(['form']);
    $rules = [
        'name' => 'required',
        'foto_profile' => 'uploaded[foto_profile]|max_size[foto_profile,1024]|is_image[foto_profile]|mime_in[foto_profile,image/jpg,image/jpeg,image/png]',
    ];

    if (!$this->validate($rules)) {
        return $this->response->setStatusCode(400)->setJSON(['error' => $this->validator->getErrors()]);
    }

    $model = new UserModel();

    // Cek apakah user dengan ID yang diberikan ada dalam database
    $existingUser = $model->find($id);

    if (!$existingUser) {
        return $this->response->setStatusCode(404)->setJSON(['error' => 'User tidak ditemukan']);
    }

    // Update data user
    $data = [
        'name' => $this->request->getVar('name'),
    ];

    // Cek apakah ada file foto_profile baru di request
    if ($this->request->getFile('foto_profile')->isValid()) {
        // Validasi dan simpan foto_profile baru
        $rules['foto_profile'] = 'uploaded[foto_profile]|max_size[foto_profile,1024]|is_image[foto_profile]|mime_in[foto_profile,image/jpg,image/jpeg,image/png]';

        if ($this->validate($rules)) {
            // Hapus foto_profile lama
            unlink('gambar/' . $existingUser['foto_profile']);

            // Pindahkan foto_profile baru
            $fotoProfile = $this->request->getFile('foto_profile');
            $namaFotoProfile = $fotoProfile->getRandomName();
            $fotoProfile->move('gambar', $namaFotoProfile);

            // Update nama foto_profile di data user
            $data['foto_profile'] = $namaFotoProfile;
        } else {
            return $this->response->setStatusCode(400)->setJSON(['error' => $this->validator->getErrors()]);
        }
    }

    // Lakukan update data
    $model->update($id, $data);

    $response = [
        'status' => 200,
        'error' => null,
        'messages' => [
            'success' => 'Data Updated'
        ]
    ];

    return $this->response->setJSON($response);
}

 
public function deleteUser($id = null)
    {
        // Membuat instance dari UserModel
        $userModel = new UserModel();
    
        // Mencari user dengan $id yang diberikan
        $user = $userModel->find($id);
    
        // Memeriksa apakah user dengan $id ditemukan
        if ($user) {
            // Mencoba menghapus user dengan $id yang diberikan
            $proses = $userModel->delete($id);
    
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
            // Jika user dengan $id tidak ditemukan, kembalikan respons 404 Not Found
            return $this->failNotFound('Data tidak ditemukan');
        }
    }

    public function totalUsers()
    {
        $model = new UserModel();
        $totalUsers = $model->countAll(); // Menghitung total pengguna dari model

        $response = [
            'status' => 'success',
            'message' => 'Total users retrieved successfully',
            'total_users' => $totalUsers,
        ];

        return $this->respond($response);
    }

}