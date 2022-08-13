exports.createBookValidation = (req, res, next) => {
    const { title, author, summary, publisher } = req.body

    if (title === undefined || title == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "Title field is required"
        })
    }

    if (author === undefined || author == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "Author field is required"
        })
    }

    if (summary === undefined || summary == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "Summary field is required"
        })
    }

    if (publisher === undefined || publisher == "") {
        return res.status(400).json({
            status: 400,
            success: false,
            message: "bad request",
            data: {
                original: req.body
            },
            error: "Publisher field is required"
        })
    }

    next()
}