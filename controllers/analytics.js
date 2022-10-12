///api/analytics/overview(GET)
export function overview(req, res) {
   res.status(200).json({ overview: false })
}
///api/analytics/analytics(GET)
export function analytics(req, res) {
   res.status(200).json({ analytics: 'from register' })
}
