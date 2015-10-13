package cursoangularjs.jackson;

public interface JsonTransformer
{
    String toJson(Object data);
    <T> T fromJson(String json, Class<T> classt);
}
