
const taskFactory = (taskName, description, dueDate, category) => {
        return Object.create(null, {
        "taskName": {
          value: taskName,
          writable: false,
          enumerable: true
        },
        "description": {
          value: description,
          writable: false,
          enumerable: true
        },
        "dueDate": {
            value: dueDate,
            writable: true,
            enumerable: true
          },
          "startDate": {
            value: "",
            writable: true,
            enumerable: true
          },
          "endDate": {
            value: "",
            writable: true,
            enumerable: true
          },
          "category": {
            value: category,
            writable: true,
            enumerable: true
          },
          "status": {
            value: "",
            writable: true,
            enumerable: false
          },
          "archive": {
            value: false,
            writable: true,
            enumerable: true
          }
    })
}



module.exports=taskFactory