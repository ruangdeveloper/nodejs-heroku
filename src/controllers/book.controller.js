const Book = require("../models/book.model")

exports.create = async (req, res) => {
    try {
        const { title, author, summary, publisher } = req.body

        const book = await Book.create({
            title,
            author,
            summary,
            publisher
        })

        return res.status(201).json({
            status: 201,
            success: true,
            message: "new book created",
            data: {
                book: book,
            },
            error: null
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.all = async (req, res) => {
    try {
        const books = await Book.findAll()
        return res.status(200).json({
            status: 200,
            success: true,
            message: "ok",
            data: {
                books,
            },
            error: null
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.find = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findOne({
            where: {
                id: id
            },
        })

        if (!book) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "book not found",
                data: null,
                error: "Book Not Found"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "ok",
            data: {
                book: book,
            },
            error: null
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params

        const updated = await Book.update(req.body, {
            where: {
                id: id,
            }
        })

        if (!updated[0]) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to update book",
                data: null,
                error: "Failed To Update Book"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "book updated",
            data: null,
            error: null
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params

        const destroyed = await Book.destroy({
            where: {
                id: id,
            }
        })

        if (!destroyed) {
            return res.status(200).json({
                status: 200,
                success: false,
                message: "failed to delete book",
                data: null,
                error: "Failed To Delete Book"
            })
        }

        return res.status(200).json({
            status: 200,
            success: true,
            message: "book deleted",
            data: null,
            error: null
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            status: 500,
            success: false,
            message: "internal server error",
            data: null,
            error: "Internal Server Error"
        })
    }
}