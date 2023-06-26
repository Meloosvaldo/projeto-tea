import { Component } from "react";

class UsuarioController {
    authUser = async (login,senha) => {
      
        try {

            const response = await fetch('https://api-benef-hml.unimednatal.com.br/usuarios/logar', {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({login: '44266737807', senha: 'unimed'}), // body data type must match "Content-Type" header
            });

            console.log("User Autenticado: ")
            console.log(response.status);
            const res = await response.json()
            console.log(res);

            if (res.Data.Result == 1) {
                const credentials = await response.json();
                console.log(credentials);
                return credentials;
            } else {
                return null;
            }

        } catch (error) {
            console.error(error);
        }
        
    }

}

export default UsuarioController;


    