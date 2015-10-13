package cursoangularjs.persistencia.DAO;

import cursoangularjs.dominio.SeguroMedico;
import cursoangularjs.persistencia.BusinessException;

import java.util.List;

public interface SeguroMedicoDAO {

    void insert(SeguroMedico seguroMedico) throws BusinessException;

    void update(int idSeguroMedico,SeguroMedico seguroMedico) throws BusinessException;

    SeguroMedico get(int idSeguroMedico) throws BusinessException;

    void delete(int idSeguroMedico) throws BusinessException;

    List<SeguroMedico> findAll() throws BusinessException;
}