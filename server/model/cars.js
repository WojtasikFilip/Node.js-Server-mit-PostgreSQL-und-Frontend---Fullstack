const db = require('../db/index');

async function getCars() {
  const { rows } = await db.query('SELECT * from cars;');
  return {
    data: rows,
    code: 200,
  };
}

async function changeStatusCar(id, data) {
  try {
    const { rows } = await db.query('SELECT * from cars where id = $1', [id]);
    if (rows.length === 0) {
      return {
        data: `Car with the id ${id} was not found.`,
        code: 404,
      };
    }
    const props = [];
    // eslint-disable-next-line guard-for-in
    for (const prop in data) props.push(`${prop} = '${data[prop]}'`);
    const cmd = `UPDATE cars set ${props.join(',')} where id = $1`;
    await db.query(cmd, [id]);
    return {
      data: `Car with the id ${id} was updated.`,
      code: 200,
    };
  } catch (err) {
    return {
      data: `Error => ${err.message}`,
      code: 500,
    };
  }
}

async function deleteCar(id) {
  const { rows } = await db.query('SELECT * from cars where id = $1', [id]);
  if (rows.length === 0) {
    return {
      data: `Car with the id ${id} was not found.`,
      code: 404,
    };
  }
  await db.query('DELETE from cars where id = $1', [id]);
  return {
    data: `Car with the id ${id} was deleted.`,
    code: 200,
  };
}

async function ExtractOwnerID(owner) {
  const { rows } = await db.query('SELECT id from owner where first_name = $1 AND last_name = $2', [
    owner.firstName,
    owner.lastName,
  ]);
  return rows[0].id;
}

async function addCar(c) {
  try {
    const { rows } = await db.query('SELECT MAX(id) from cars');
    const maxID = rows[0].max + 1;

    const ownerID = await ExtractOwnerID(c.owner);
    if (ownerID === null) {
      return {
        data: 'Owner not found.',
        code: 404,
      };
    }

    await db.query(
      'INSERT into cars (id,title,image,status,price,miles,year_of_make,description,owner) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)',
      [maxID, c.title, c.image, c.status, c.price, c.miles, c.year_of_make, c.description, ownerID],
    );
    return {
      data: `Car with the id ${maxID} was added.`,
      code: 200,
    };
  } catch (err) {
    return {
      data: `Error => ${err.message}`,
      code: 500,
    };
  }
}

module.exports = { getCars, changeStatusCar, deleteCar, addCar };
