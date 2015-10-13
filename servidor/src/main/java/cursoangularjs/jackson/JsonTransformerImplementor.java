package cursoangularjs.jackson;

import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.ObjectMapper;

import java.io.IOException;

public class JsonTransformerImplementor implements JsonTransformer
{

    @Override
    public String toJson(Object data)
    {
        try
        {
            ObjectMapper objectMapper = new ObjectMapper();

            return objectMapper.writeValueAsString(data);
        }
        catch (JsonProcessingException ex)
        {
            throw new RuntimeException(ex);
        }
        catch (IOException ex1)
        {
            throw new RuntimeException(ex1);
        }
    }

    @Override
    public Object fromJson(String json, Class classt) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();

            return objectMapper.readValue(json, classt);
        }
        catch (IOException ex)
        {
            throw new RuntimeException(ex);
        }
    }
}
