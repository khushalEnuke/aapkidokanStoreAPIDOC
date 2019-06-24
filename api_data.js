define({ "api": [
  {
    "type": "post",
    "url": "/api/driver/auth/change-password",
    "title": "Change Password",
    "name": "Change_Password",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>user's new password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n        \"message\": \"Password has been updated Successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Password is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Password is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 401,\n        \"name\": \"UNAUTHORIZED\",\n        \"description\": \"You are not logged in, e.g. using a valid access token.\"\n    },\n    \"singleStringMessage\": \"Password is invalid\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/driver/auth/forget-password",
    "title": "Forgot Password",
    "name": "Forgot_Password",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>user's contact number.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n        \"message\": \"An OTP was sent to your contact number. Please check.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Contact Number is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Contact Number is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Contact number is not registered With Us\",\n    \"error\": {\n        \"validation\": {\n            \"contact_number\": [\n                \"Contact number is not registered With Us\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/driver/auth/reset-password",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": null,\n            \"verification_token\": \"4afee0fe-e6cd-4dbf-8d6f-9c87c1af3f6d\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T12:00:31.950Z\",\n            \"__v\": 0\n        },\n        \"message\": \"Password has been updated Successfully\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Password is required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Password is required:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Password is a required field\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/driver/auth/login",
    "title": "User Login",
    "name": "User_Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user's email or contact number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMDlkNjFlMjFkMDM1MTZkMjRiYmU3YSIsImlhdCI6MTU2MDkyNTc1MX0.-kEWw_nlKWZzvn_wxTOMPOj8OvR9iQo1Bd-qbAXMlSs\",\n        \"user\": {\n            \"picture\": null,\n            \"status\": 1,\n            \"_id\": \"5d09d61e21d03516d24bbe7a\",\n            \"full_name\": \"khushal\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"password\": null,\n            \"contact_number\": \"9711669906\",\n            \"address\": \"Test Street\",\n            \"created_at\": \"2019-06-19T06:28:46.600Z\",\n            \"updated_at\": \"2019-06-19T06:28:46.600Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnauthorizedError",
            "description": "<p>Username or Password is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 401,\n        \"name\": \"UNAUTHORIZED\",\n        \"description\": \"You are not logged in, e.g. using a valid access token.\"\n    },\n    \"singleStringMessage\": \"Username or Password is invalid\",\n    \"error\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/driver/auth/verify-otp",
    "title": "User Otp Verification",
    "name": "User_Otp_Verification",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>user's contact number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>otp.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verification_token",
            "description": "<p>verification token send in previous response.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cd40ba1e5c56b340aa2a9bc\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": \"$2b$10$kDWy7UMqIXmqxMSq6hcgpuiSb4BjDQcB5WcNGTYsNB3ZqI0BNnuqq\",\n            \"verification_token\": \"68f63534-631f-41a4-8cde-2d7b55e2a276\",\n            \"address\": [],\n            \"created_at\": \"2019-05-09T11:14:41.688Z\",\n            \"updated_at\": \"2019-05-09T11:14:41.688Z\",\n            \"__v\": 0\n        },\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZDQwYmExZTVjNTZiMzQwYWEyYTliYyIsInR5cGUiOjMsImlhdCI6MTU1NzQwMTgxOH0.osWeW6W3X6j74wVYaAwgjbH2vR0rWQyegX0HUw-5O1o\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Verification token is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Verification token is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Verification token is invalid\",\n    \"error\": {\n        \"validation\": {\n            \"verification_token\": [\n                \"Verification token is invalid\"\n            ]\n        }\n    }\n}",
          "type": "json"
        },
        {
          "title": "Otp is invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Invalid otp. Please try again.\"\n    error: {\n           message: \"Invalid otp. Please try again.\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "put",
    "url": "/api/driver/order/accept/:id",
    "title": "Accept Order",
    "name": "Accept_Order",
    "group": "Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the order to be accepted.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"order\": {\n            \"address\": {\n                \"pickup\": {\n                    \"house_no\": \"21/3\",\n                    \"street\": \"XYZ street\",\n                    \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\"\n                },\n                \"delivery\": {\n                    \"alias\": \"work\",\n                    \"full_name\": \"Najam ul Saqib\",\n                    \"email\": \"najam.sahto@gmail.com\",\n                    \"contact_number\": \"3012999901\",\n                    \"house_no\": \"Office number 309, Progressive Plaza\",\n                    \"locality\": \"Beaumont Road\",\n                    \"landmark\": \"Near Marriet Hotel\",\n                    \"city_id\": \"5cd02537b1ef5e3bfb165f5c\"\n                }\n            },\n            \"status\": 1,\n            \"is_express_delivery\": false,\n            \"payment_type\": 1,\n            \"discount\": 0,\n            \"delivery_charges\": 0,\n            \"driver_assigned\": true,\n            \"_id\": \"5cf6b2d5b4deea62d01e4b2a\",\n            \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n            \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n            \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n            \"customer_id\": \"5ceb927146c8cf13bc2e0db6\",\n            \"store_id\": \"5cd1259b63aff817c37afb02\",\n            \"products\": [\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2c\",\n                    \"product_id\": \"5ce55461ff79ad6065d5b9fe\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                },\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2b\",\n                    \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                }\n            ],\n            \"total_amount\": 60,\n            \"order_id\": \"f1444c7\",\n            \"created_at\": \"2019-06-04T18:05:09.150Z\",\n            \"updated_at\": \"2019-06-20T10:55:26.817Z\",\n            \"__v\": 0,\n            \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n            \"taxes\": []\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Order Already Accepted BY other Driver.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Order Already Accepted BY other Driver:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"This Order has already been accepted by other driver.\",\n    \"error\": {\n        \"validation\": {\n            \"order\": [\n                \"This Order has already been accepted by other driver.\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/driver/order/unassigned",
    "title": "Get Unassigned Order",
    "name": "Get_Unassigned_Order",
    "group": "Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"orders\": [\n            {\n                \"_id\": \"5cf67b33b4deea62d01e4b1c\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"full_name\": \"Love\",\n                        \"email\": \"Love@gmail.com\",\n                        \"contact_number\": \"9900887766\",\n                        \"house_no\": \"G-78\",\n                        \"locality\": \"Srs\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"alias\": \"home\"\n                    }\n                },\n                \"status\": 2,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n                \"customer_id\": \"5cf67a6fb4deea62d01e4b18\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf67b33b4deea62d01e4b1d\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 3,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 90,\n                \"order_id\": \"c4486c0\",\n                \"driver_assigned\": false,\n                \"created_at\": \"2019-06-04T14:07:47.918Z\",\n                \"updated_at\": \"2019-06-04T14:07:47.918Z\",\n                \"__v\": 0\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/driver/order",
    "title": "Get driver orders",
    "name": "Get_driver_orders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Query String": [
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>(optional) Status of the order to be displayed.</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "from_date",
            "description": "<p>(optional) (YYYY-MM-DD) Start Date of the order to be displayed Otherwise today's date is considered .</p>"
          },
          {
            "group": "Query String",
            "type": "String",
            "optional": false,
            "field": "to_date",
            "description": "<p>(optional) (YYYY-MM-DD) End Date of the order to be displayed Otherwise today's date is considered.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"orders\": [\n            {\n                \"_id\": \"5cf67b33b4deea62d01e4b1c\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"full_name\": \"Love\",\n                        \"email\": \"Love@gmail.com\",\n                        \"contact_number\": \"9900887766\",\n                        \"house_no\": \"G-78\",\n                        \"locality\": \"Srs\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"alias\": \"home\",\n                        \"city\": {\n                            \"_id\": \"5cd01c1839b32d325085052d\",\n                            \"areas\": [\n                                \"5cd01b02c1a6f3317fd9f072\",\n                                \"5cd01b0cf03a5831a00732d9\"\n                            ],\n                            \"name\": \"Islamabad\",\n                            \"created_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"updated_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"__v\": 0\n                        }\n                    }\n                },\n                \"status\": 3,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-20T00:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-20T02:30:00.000Z\",\n                \"customer_id\": \"5cf67a6fb4deea62d01e4b18\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf67b33b4deea62d01e4b1d\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 3,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 90,\n                \"order_id\": \"c4486c0\",\n                \"driver_assigned\": true,\n                \"created_at\": \"2019-06-04T14:07:47.918Z\",\n                \"updated_at\": \"2019-06-20T05:40:38.015Z\",\n                \"__v\": 0,\n                \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n                \"store\": {\n                    \"_id\": \"5cd1259b63aff817c37afb02\",\n                    \"picture\": \"ivvf6q6jx4hu1j7.png\",\n                    \"status\": 1,\n                    \"email\": \"khushal.pahuja@enukesoftware.com\",\n                    \"contact_number\": \"9711669906\",\n                    \"name\": \"XYZ store\",\n                    \"owner\": {\n                        \"full_name\": \"khushal pahuja\",\n                        \"email\": \"khushal.pahuja@enukesoftware.com\",\n                        \"contact_number\": \"9711669906\",\n                        \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\"\n                    },\n                    \"commission\": 2,\n                    \"address\": {\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"shop_no\": \"123\",\n                        \"locality\": \"Near Test Corner\"\n                    },\n                    \"timings\": {\n                        \"open_time\": \"08:00\",\n                        \"close_time\": \"20:00\"\n                    },\n                    \"created_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"drivers\": [\n                        \"5d09d61e21d03516d24bbe7a\"\n                    ],\n                    \"__v\": 0,\n                    \"has_express_delivery\": false,\n                    \"self_delivery\": false\n                }\n            }\n        ],\n        \"orderCounts\": {\n            \"total\": 3,\n            \"unDelivered\": 0,\n            \"completed\": 1\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/driver/order/scheduled",
    "title": "Scheduled Orders",
    "name": "Scheduled_Orders",
    "group": "Order",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"orders\": [\n            {\n                \"_id\": \"5cf6b2d5b4deea62d01e4b2a\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"alias\": \"work\",\n                        \"full_name\": \"Najam ul Saqib\",\n                        \"email\": \"najam.sahto@gmail.com\",\n                        \"contact_number\": \"3012999901\",\n                        \"house_no\": \"Office number 309, Progressive Plaza\",\n                        \"locality\": \"Beaumont Road\",\n                        \"landmark\": \"Near Marriet Hotel\",\n                        \"city_id\": \"5cd02537b1ef5e3bfb165f5c\",\n                        \"city\": {\n                            \"_id\": \"5cd02537b1ef5e3bfb165f5c\",\n                            \"areas\": [\n                                \"5cd01b12c96f3731b5639a17\",\n                                \"5cd01b1d14310e31d2ffff6d\"\n                            ],\n                            \"name\": \"Lahore\",\n                            \"created_at\": \"2019-05-06T12:14:47.699Z\",\n                            \"updated_at\": \"2019-05-06T12:14:47.699Z\",\n                            \"__v\": 0\n                        }\n                    }\n                },\n                \"status\": 1,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n                \"customer_id\": \"5ceb927146c8cf13bc2e0db6\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf6b2d5b4deea62d01e4b2c\",\n                        \"product_id\": \"5ce55461ff79ad6065d5b9fe\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 1,\n                        \"name\": \"Amul Milk\"\n                    },\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf6b2d5b4deea62d01e4b2b\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 1,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 60,\n                \"order_id\": \"f1444c7\",\n                \"driver_assigned\": true,\n                \"created_at\": \"2019-06-04T18:05:09.150Z\",\n                \"updated_at\": \"2019-06-20T10:55:26.817Z\",\n                \"__v\": 0,\n                \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n                \"store\": {\n                    \"_id\": \"5cd1259b63aff817c37afb02\",\n                    \"picture\": \"ivvf6q6jx4hu1j7.png\",\n                    \"status\": 1,\n                    \"email\": \"khushal.pahuja@enukesoftware.com\",\n                    \"contact_number\": \"9711669906\",\n                    \"name\": \"XYZ store\",\n                    \"owner\": {\n                        \"full_name\": \"khushal pahuja\",\n                        \"email\": \"khushal.pahuja@enukesoftware.com\",\n                        \"contact_number\": \"9711669906\",\n                        \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\"\n                    },\n                    \"commission\": 2,\n                    \"address\": {\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"shop_no\": \"123\",\n                        \"locality\": \"Near Test Corner\"\n                    },\n                    \"timings\": {\n                        \"open_time\": \"08:00\",\n                        \"close_time\": \"20:00\"\n                    },\n                    \"created_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"drivers\": [\n                        \"5d09d61e21d03516d24bbe7a\"\n                    ],\n                    \"__v\": 0,\n                    \"has_express_delivery\": false,\n                    \"self_delivery\": false\n                }\n            },\n            {\n                \"_id\": \"5cf67b33b4deea62d01e4b1c\",\n                \"address\": {\n                    \"pickup\": {\n                        \"house_no\": \"21/3\",\n                        \"street\": \"XYZ street\",\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\"\n                    },\n                    \"delivery\": {\n                        \"full_name\": \"Love\",\n                        \"email\": \"Love@gmail.com\",\n                        \"contact_number\": \"9900887766\",\n                        \"house_no\": \"G-78\",\n                        \"locality\": \"Srs\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"alias\": \"home\",\n                        \"city\": {\n                            \"_id\": \"5cd01c1839b32d325085052d\",\n                            \"areas\": [\n                                \"5cd01b02c1a6f3317fd9f072\",\n                                \"5cd01b0cf03a5831a00732d9\"\n                            ],\n                            \"name\": \"Islamabad\",\n                            \"created_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"updated_at\": \"2019-05-06T11:35:52.520Z\",\n                            \"__v\": 0\n                        }\n                    }\n                },\n                \"status\": 1,\n                \"is_express_delivery\": false,\n                \"payment_type\": 1,\n                \"discount\": 0,\n                \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n                \"deliver_start_time\": \"2019-06-20T00:30:00.000Z\",\n                \"deliver_end_time\": \"2019-06-20T02:30:00.000Z\",\n                \"customer_id\": \"5cf67a6fb4deea62d01e4b18\",\n                \"store_id\": \"5cd1259b63aff817c37afb02\",\n                \"products\": [\n                    {\n                        \"pictures\": [\n                            \"z7re7faj1hjvzafr9e.jpeg\"\n                        ],\n                        \"_id\": \"5cf67b33b4deea62d01e4b1d\",\n                        \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                        \"size\": \"1 litre\",\n                        \"price\": 30,\n                        \"count\": 3,\n                        \"name\": \"Amul Milk\"\n                    }\n                ],\n                \"total_amount\": 90,\n                \"order_id\": \"c4486c0\",\n                \"driver_assigned\": true,\n                \"created_at\": \"2019-06-04T14:07:47.918Z\",\n                \"updated_at\": \"2019-06-20T05:40:38.015Z\",\n                \"__v\": 0,\n                \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n                \"store\": {\n                    \"_id\": \"5cd1259b63aff817c37afb02\",\n                    \"picture\": \"ivvf6q6jx4hu1j7.png\",\n                    \"status\": 1,\n                    \"email\": \"khushal.pahuja@enukesoftware.com\",\n                    \"contact_number\": \"9711669906\",\n                    \"name\": \"XYZ store\",\n                    \"owner\": {\n                        \"full_name\": \"khushal pahuja\",\n                        \"email\": \"khushal.pahuja@enukesoftware.com\",\n                        \"contact_number\": \"9711669906\",\n                        \"password\": \"$2b$10$.tTIIkskAAhZqEg20cfVx.sHXlnPB93/zVLBFldR6anWN1Qdc8MIC\"\n                    },\n                    \"commission\": 2,\n                    \"address\": {\n                        \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                        \"city_id\": \"5cd01c1839b32d325085052d\",\n                        \"shop_no\": \"123\",\n                        \"locality\": \"Near Test Corner\"\n                    },\n                    \"timings\": {\n                        \"open_time\": \"08:00\",\n                        \"close_time\": \"20:00\"\n                    },\n                    \"created_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"updated_at\": \"2019-05-07T06:28:43.580Z\",\n                    \"drivers\": [\n                        \"5d09d61e21d03516d24bbe7a\"\n                    ],\n                    \"__v\": 0,\n                    \"has_express_delivery\": false,\n                    \"self_delivery\": false\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/driver/order/status-update/:id",
    "title": "Update order status",
    "name": "Update_order_status",
    "group": "Order",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the order to be updated.</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the order.</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"order\": {\n            \"address\": {\n                \"pickup\": {\n                    \"house_no\": \"21/3\",\n                    \"street\": \"XYZ street\",\n                    \"area_id\": \"5cd01b02c1a6f3317fd9f072\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\"\n                },\n                \"delivery\": {\n                    \"alias\": \"work\",\n                    \"full_name\": \"Najam ul Saqib\",\n                    \"email\": \"najam.sahto@gmail.com\",\n                    \"contact_number\": \"3012999901\",\n                    \"house_no\": \"Office number 309, Progressive Plaza\",\n                    \"locality\": \"Beaumont Road\",\n                    \"landmark\": \"Near Marriet Hotel\",\n                    \"city_id\": \"5cd02537b1ef5e3bfb165f5c\"\n                }\n            },\n            \"status\": 4,\n            \"is_express_delivery\": false,\n            \"payment_type\": 1,\n            \"discount\": 0,\n            \"delivery_charges\": 0,\n            \"driver_assigned\": true,\n            \"_id\": \"5cf6b2d5b4deea62d01e4b2a\",\n            \"slot_id\": \"5cf4faaaaef3b62836047c7e\",\n            \"deliver_start_time\": \"2019-06-06T10:30:00.000Z\",\n            \"deliver_end_time\": \"2019-06-06T12:30:00.000Z\",\n            \"customer_id\": \"5ceb927146c8cf13bc2e0db6\",\n            \"store_id\": \"5cd1259b63aff817c37afb02\",\n            \"products\": [\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2c\",\n                    \"product_id\": \"5ce55461ff79ad6065d5b9fe\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                },\n                {\n                    \"pictures\": [\n                        \"z7re7faj1hjvzafr9e.jpeg\"\n                    ],\n                    \"_id\": \"5cf6b2d5b4deea62d01e4b2b\",\n                    \"product_id\": \"5ce68f90ff79ad6065d5ba15\",\n                    \"size\": \"1 litre\",\n                    \"price\": 30,\n                    \"count\": 1,\n                    \"name\": \"Amul Milk\"\n                }\n            ],\n            \"total_amount\": 60,\n            \"order_id\": \"f1444c7\",\n            \"created_at\": \"2019-06-04T18:05:09.150Z\",\n            \"updated_at\": \"2019-06-20T14:17:31.411Z\",\n            \"__v\": 0,\n            \"driver_id\": \"5d09d61e21d03516d24bbe7a\",\n            \"taxes\": []\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/driver/user/profile",
    "title": "Get Profile",
    "name": "Get_Profile",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"customer\": {\n            \"picture\": \"ivvf6tmjwrhh057.png\",\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5cf609a8a460b46232cb3e41\",\n            \"email\": \"khushal.pahuja@enukesoftware.cm\",\n            \"password\": \"$2b$10$PqV6nF6Sp36ZjAmgWGU97OEQmfVgVGmF3XBJKeQUzarzAkbKrFJ0y\",\n            \"full_name\": \"Khushal Pahuja 1\",\n            \"contact_number\": \"9711669906\",\n            \"verification_token\": null,\n            \"address\": [],\n            \"created_at\": \"2019-06-04T06:03:20.802Z\",\n            \"updated_at\": \"2019-06-11T07:28:06.505Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/driver/user/profile/:id",
    "title": "Update Profile",
    "name": "Update_Profile",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>'Bearer' + user token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the User to be updated</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>(optional) name of the user.</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": false,
            "field": "picture",
            "description": "<p>(optional) Profile Picture .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"code\": 200,\n    \"data\": {\n        \"customer\": {\n            \"picture\": null,\n            \"gmail_id\": null,\n            \"facebook_id\": null,\n            \"status\": 1,\n            \"_id\": \"5ce7f068b9c00379c7d8564b\",\n            \"email\": \"khushal.pahuja@enukesoftware.com\",\n            \"contact_number\": \"9711669906\",\n            \"full_name\": \"khushal pahuja\",\n            \"password\": \"$2b$10$ooranEJziyIxjfLLprkIVuVjjBhRfZ72DXqlhGNk4K2CyziGfQ/MC\",\n            \"verification_token\": \"b7274e6b-690b-46da-9dda-631d013743e2\",\n            \"address\": [\n                {\n                    \"_id\": \"5ced0d960945c93eb129d2f5\",\n                    \"house_no\": \"123\",\n                    \"locality\": \"xyz colony\",\n                    \"city_id\": \"5cd01c1839b32d325085052d\",\n                    \"alias\": \"home\",\n                    \"landmark\": \"xyz park\",\n                    \"email\": \"khushal@gmail.com\",\n                    \"contact_number\": \"9711669906\"\n                }\n            ],\n            \"created_at\": \"2019-05-24T13:23:52.522Z\",\n            \"updated_at\": \"2019-05-28T10:29:42.517Z\",\n            \"__v\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Auth Token is Invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Auth Token is Invalid:",
          "content": "{\n    \"success\": false,\n    \"code\": {\n        \"code\": 422,\n        \"name\": \"UNPROCESSABLE_ENTITY\",\n        \"description\": \"Validation failed. The request and the format is valid, however the request was unable to process. For instance when sent data does not pass validation tests.\"\n    },\n    \"singleStringMessage\": \"Authentication token is invalid\",\n    \"error\": {\n        \"validation\": {\n            \"token\": [\n                \"Authentication token is invalid\"\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "aapki-dokan-api/routes/apis/driver/user.js",
    "groupTitle": "User"
  }
] });
