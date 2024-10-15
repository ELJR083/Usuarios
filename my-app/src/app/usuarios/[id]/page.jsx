import axios from "axios";

async function getUsuario(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const usuario = await axios.get(url);
  return usuario.data;
}

export default async function Usuario({ params }) {
  const { id } = params;
  const usuario = await getUsuario(id);

  return (
    <div>
      <h1>Información del Usuario</h1>
      <table border="1" cellPadding="10">
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{usuario.id}</td>
          </tr>
          <tr>
            <td>Nombre:</td>
            <td>{usuario.name}</td>
          </tr>
          <tr>
            <td>Usuario:</td>
            <td>{usuario.username}</td>
          </tr>
          <tr>
            <td>Correo:</td>
            <td>{usuario.email}</td>
          </tr>
          <tr>
            <td>Teléfono:</td>
            <td>{usuario.phone}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>{usuario.website}</td>
          </tr>
          <tr>
            <td>Dirección:</td>
            <td>{`${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}, ${usuario.address.zipcode}`}</td>
          </tr>
          <tr>
            <td>Geo:</td>
            <td>{`Latitud: ${usuario.address.geo.lat}, Longitud: ${usuario.address.geo.lng}`}</td>
          </tr>
          <tr>
            <td>Compañía:</td>
            <td>{`${usuario.company.name}, ${usuario.company.catchPhrase}, ${usuario.company.bs}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
