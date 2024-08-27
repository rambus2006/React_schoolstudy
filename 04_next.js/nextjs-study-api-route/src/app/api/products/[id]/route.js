export async function GET(req, { params }) {
    const id = params.id
    return Response.json({ name: "Product " + id })
}
