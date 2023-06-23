import { Component } from "react";

class UsuarioController {
    authUser = async (login,senha) => {
      
        try {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
            myHeaders.append("Cookie", "cookiesession1=678A3E195EE55E34037D53FB092A2B01");

            var urlencoded = new URLSearchParams();
            urlencoded.append("login", "44266737807");
            urlencoded.append("senha", "unimed");

            const uri = 'https://api-benef-hml.unimednatal.com.br/usuarios/logar'
            const response = await fetch(uri, {
                method: 'POST',
                headers:  myHeaders,
                body: urlencoded
            });

            console.log("User Autenticado: ")

            console.log(response.status);

            if (response.status == 200) {
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


    