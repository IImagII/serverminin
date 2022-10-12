///api/category(GET)
export function getAll(req, res) {
   res.status(200).json({ message: 'Category' })
}
///api/category/:id(GET)
export function getById(req, res) {
   res.status(200).json({ getById: false })
}
///api/category/:id(DELETE)
export function removeCategory(req, res) {
   res.status(200).json({ removeCategory: false })
}
///api/category(POST)
export function createCategory(req, res) {
   res.status(200).json({ login: false })
}
///api/category/:id(Patch)
export function updateCategory(req, res) {
   res.status(200).json({ login: false })
}
