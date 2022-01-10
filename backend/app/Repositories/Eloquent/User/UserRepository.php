<?php

namespace App\Repositories\Eloquent\User;

use App\Models\User;
use App\Repositories\Contracts\User\UserRepositoryInterface;
use App\Repositories\Eloquent\AbstractRepository;

class UserRepository extends AbstractRepository implements UserRepositoryInterface
{
    /**
     * @var User
    */
    protected $model = User::class;

    public function index()
    {
        return $this->model->orderBy('name', 'asc')->get();
    }
    
    public function create($dados)
    {
        $this->model->name = $dados['name'];
        $this->model->email = $dados['email'];
        $this->model->login = $dados['login'];
        $this->model->password = $dados['password'];

        $this->model->cep = $dados['cep'];
        $this->model->logradouro = $dados['logradouro'];
        $this->model->numero = isset($dados['numero'])?$dados['numero']:0;
        $this->model->bairro = $dados['bairro'];
        $this->model->complemento = isset($dados['complemento'])?$dados['complemento']:'';
        $this->model->cidade = $dados['cidade'];
        $this->model->uf = $dados['uf'];

        $this->model->save();

        return true;
    }

    
    public function updateUser($dados, $id){
        $resp = $this->model->findOrFail($id);

        if (empty($resp)) {
            return false;
        }
        
        $resp->name = $dados['name'];
        $resp->email = $dados['email'];
        $resp->login = $dados['login'];
        $resp->password = $dados['password'];

        $resp->cep = $dados['cep'];
        $resp->logradouro = $dados['logradouro'];
        $resp->numero = $dados['numero'];
        $resp->bairro = $dados['bairro'];
        $resp->complemento = $dados['complemento'];
        $resp->cidade = $dados['cidade'];
        $resp->uf = $dados['uf'];

        if (!$resp->save()) {
            return ['message' => 'Falha ao atualizar dados!', 'code' => 500];
        }

        return $resp;
    }

    public function getById($id)
    {
        $dados = $this->show($id);
        if (!$dados) {
            return false;
        }

        return $dados;
    }
}