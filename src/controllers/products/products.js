//Representatividade do banco de dados
const ProductsModel = require("../../models/products/products");
async function get(req, res) {
  const { id } = req.params;

  const obj = id ? { _id: id } : null;
  const products = await ProductsModel.find(obj);

  res.send(products);
}

async function post(req, res) {
  const { name, brand, category, price, serie, quantity } = req.body;

  const product = new ProductsModel({
    name,
    brand,
    category,
    price,
    serie,
    quantity,
  });

  product.save()

  res.send()
}

async function put(req, res) {
    const {id} = req.params;

    const product = await ProductsModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    res.send({
        message: 'success',
        product
    })

}

async function remove(req, res) {
    const {id} = req.params
    const remove = await ProductsModel.deleteOne({_id: id})

    const message = remove.ok ? 'success' : 'error'
    res.send({
        message
    })

}
module.exports = {
  get,
  post,
  put,
  remove
};
