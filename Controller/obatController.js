import db from "../connection.js";

export const getObat = (req, res) => {
  const sql = "SELECT * FROM obat";
  db.query(sql, (error, result) => {
    res.send(result);
  });
};

export const getObatById = (req, res) => {
  const sql = `SELECT * FROM obat WHERE id=${req.query.id}`;
  db.query(sql, (error, result) => {
    res.json(result);
  });
};

export const createObat = (req, res) => {
  const { id, nama_obat, jenis, tgl_expired} = req.body;
  const sql =
    "INSERT INTO obat ( nama_obat, jenis, tgl_expired) VALUES (?,?,?)";
  db.query(sql, [ nama_obat, jenis, tgl_expired], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(201);
    res.json(result);
  });
};

export const updateObat = (req, res) => {
  const id = req.query.id;

  const { nama_obat, jenis, tgl_expired } = req.body;
  if (nama_obat || jenis || tgl_expired) {
    const query = `UPDATE obat SET nama_obat = "${nama_obat}", jenis = "${jenis}", tgl_expired = "${tgl_expired},"  WHERE  id=${id}`;

    db.query(query, (error, result) => {
      if (error) res.status(400).send(error.message);
      res.json(result);
    });
  } else {
    res.send("Isi body nya");
  }
};

export const deleteObat = (req, res) => {
  const id = req.query.id;
  const sql = "DELETE FROM obat WHERE id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      res.status(400);
      res.send(error);
    }
    res.status(200);
    res.json("data berhasil dihapus");
  });
};