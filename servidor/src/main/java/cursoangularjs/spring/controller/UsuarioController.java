package cursoangularjs.spring.controller;


import cursoangularjs.persistencia.DAO.Usuario;
import cursoangularjs.jackson.JsonTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class UsuarioController
{
    @Autowired
    private JsonTransformer jsonTransformer;

    @RequestMapping(value = {"/Usuario"})
    public void prueba(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws IOException
    {
        Usuario usuario = new Usuario("Alberto Tortosa", "alberto_tortosa@gmail.com", 91);
        String jsonUsuario = jsonTransformer.toJson(usuario);

        httpServletResponse.getWriter().println(jsonUsuario);
    }

}
