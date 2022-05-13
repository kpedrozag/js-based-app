export default (schema, type) => {
  return (req, res, next) => {
    const payload = req[type];
    const { error } = schema.validate(payload);
    if (error) {
      const msj = error.details[0].message.replaceAll(`"`, `'`);
      return res.status(400).send({
        msg: 'Invalid payload',
        error: msj,
      });
    }
    next();
  };
};
