package cursoangularjs.spring.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class UsuarioController
{
    @RequestMapping(value = {"/Usuario"})
    public void prueba(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws IOException
    {
        httpServletResponse.getWriter().println("Hola ko");
    }

}
