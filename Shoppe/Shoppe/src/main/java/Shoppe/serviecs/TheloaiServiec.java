package Shoppe.serviecs;

import Shoppe.persistence.model.Theloai;

public interface TheloaiServiec {
  Theloai findOneById(Long id);
  Theloai findByCode(String code);
  Theloai save (Theloai theloai);
}
