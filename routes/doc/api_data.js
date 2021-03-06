define({ "api": [
  {
    "type": "post",
    "url": "comments/",
    "title": "post comments",
    "name": "CreateComments",
    "group": "Comments",
    "description": "<p>create Comments</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>body</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>Task id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lesson_id",
            "description": "<p>lesson id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>Company id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>Course id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "parent_id",
            "description": "<p>reply id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n  {\n    \"id\": 1,\n    \"content\": \"comment4\",\n    \"type\": \"type1\",\n    \"user_id\": 5,\n    \"task_id\": 2,\n    \"lesson_id\": null,\n    \"company_id\": 1,\n    \"course_id\": 2,\n    \"parent_id\": null\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "get",
    "url": "comments/",
    "title": "get comments",
    "name": "GetComments",
    "group": "Comments",
    "description": "<p>get Comments</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n         {\n             \"id\": 1,\n             \"content\": \"comment4\",\n             \"type\": \"type1\",\n             \"user_id\": 5,\n             \"task_id\": 2,\n             \"lesson_id\": null,\n             \"company_id\": 1,\n             \"course_id\": 2,\n             \"parent_id\": null\n         }\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./comments.js",
    "groupTitle": "Comments"
  },
  {
    "type": "post",
    "url": "comapnies/:id",
    "title": "change company",
    "name": "ChangeCompanies",
    "group": "Companies",
    "description": "<p>change Companies</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the Companies</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Companies</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[ 1 ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./companies.js",
    "groupTitle": "Companies"
  },
  {
    "type": "post",
    "url": "comapnies/",
    "title": "create company",
    "name": "CreateCompanies",
    "group": "Companies",
    "description": "<p>create Companies</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Companies</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": " {\n  \"id\": 3,\n  \"name\": \"Google\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./companies.js",
    "groupTitle": "Companies"
  },
  {
    "type": "delete",
    "url": "comapnies/:id",
    "title": "delete company",
    "name": "DeleteCompanies",
    "group": "Companies",
    "description": "<p>delete Companies</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the Companies</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[ 1 ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./companies.js",
    "groupTitle": "Companies"
  },
  {
    "type": "get",
    "url": "comapnies/",
    "title": "get companies",
    "name": "GetCompanies",
    "group": "Companies",
    "description": "<p>get Companies</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": " [\n  {\n      \"id\": 1,\n      \"name\": \"Facebook\"\n  },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./companies.js",
    "groupTitle": "Companies"
  },
  {
    "type": "get",
    "url": "/companies/employees/:id",
    "title": "get employee of company",
    "name": "GetEmployeeOfCompany",
    "group": "Companies",
    "description": "<p>get Employee Of Company</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the Company</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n {\n    \"id\": 6,\n    \"name\": \"employee\",\n    \"surname\": \"employee\",\n    \"email\": \"employee@gmail.com\",\n    \"phone\": \"+77471194810\",\n    \"password\": \"$2a$10$SAVmliciPlmvJZvt1e2jxeHl1DZt4.bEop6PZ8mG76uHXCQzlGHsy\",\n    \"role\": \"employee\",\n    \"account_name\": null,\n    \"company_id\": 1\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./companies.js",
    "groupTitle": "Companies"
  },
  {
    "type": "put",
    "url": "courses/:id",
    "title": "change course",
    "name": "ChangeCourses",
    "group": "Courses",
    "description": "<p>change Course</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "primary_teacher_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_add_teach_can_edit",
            "description": "<p>is add teach can edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_notify_pri_teach_ans",
            "description": "<p>is notify pri teach ans</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_notify_all_teach_ans",
            "description": "<p>is notify all teach ans</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>Order</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "access_type_id",
            "description": "<p>access_type</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[ 1 ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "post",
    "url": "courses/",
    "title": "post course",
    "name": "CreateCourses",
    "group": "Courses",
    "description": "<p>Course Course</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the course</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "primary_teacher_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_add_teach_can_edit",
            "description": "<p>is add teach can edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_notify_pri_teach_ans",
            "description": "<p>is notify pri teach ans</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_notify_all_teach_ans",
            "description": "<p>is notify all teach ans</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>Order</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "access_type_id",
            "description": "<p>access_type</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n    \"id\": 4,\n    \"name\": \"PP2\",\n    \"description\": \"course 1 description\",\n    \"primary_teacher_id\": 1,\n    \"is_add_teach_can_edit\": true,\n    \"is_notify_pri_teach_ans\": true,\n    \"is_notify_all_teach_ans\": true,\n    \"order\": 1,\n    \"access_type_id\": 1,\n    \"company_id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "delete",
    "url": "courses/:id",
    "title": "delete course",
    "name": "DeleteCourses",
    "group": "Courses",
    "description": "<p>delete Course</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the course</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[ 1 ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "courses/byCompanyId",
    "title": "get courses by company_id",
    "name": "GetCompanyCourses",
    "group": "Courses",
    "description": "<p>get CompanyCourses</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "  [\n    {\n        \"id\": 2,\n        \"name\": \"ICT\",\n        \"description\": \"course 1 description\",\n        \"primary_teacher_id\": 1,\n        \"is_add_teach_can_edit\": true,\n        \"is_notify_pri_teach_ans\": true,\n        \"is_notify_all_teach_ans\": true,\n        \"order\": 1,\n        \"access_type_id\": 1,\n        \"company_id\": 1\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "courses/",
    "title": "get courses",
    "name": "GetCourses",
    "group": "Courses",
    "description": "<p>get Courses</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": " [\n  {\n      \"id\": 2,\n      \"name\": \"ICT\",\n      \"description\": \"course 1 description\",\n      \"primary_teacher_id\": 1,\n      \"is_add_teach_can_edit\": true,\n      \"is_notify_pri_teach_ans\": true,\n      \"is_notify_all_teach_ans\": true,\n      \"order\": 1,\n      \"access_type_id\": 1,\n      \"company_id\": 1\n  },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "courses/courseGroupSubscribers/:id",
    "title": "get subscribed groups of course",
    "name": "GetCoursesSubscribedGroup",
    "group": "Courses",
    "description": "<p>get Course Subscribed Group</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of course</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "  [\n    {\n        \"Group\": {\n            \"id\": 9,\n            \"name\": \"group 1\"\n        }\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "get",
    "url": "courses/courseSubscribers/:id",
    "title": "get subscribers of course",
    "name": "GetCoursesSubscribers",
    "group": "Courses",
    "description": "<p>get Course Subscribers</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of course</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "  [\n    {\n        \"User\": {\n            \"id\": 5,\n            \"name\": \"User2\",\n            \"surname\": \"userov\",\n            \"phone\": \"+77471194810\",\n            \"email\": \"user2@gmail.com\"\n        }\n    },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./courses.js",
    "groupTitle": "Courses"
  },
  {
    "type": "put",
    "url": "lessons/:id",
    "title": "change lesson",
    "name": "ChangeLesson",
    "group": "Lessons",
    "description": "<p>change lesson</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>lesson id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the lesson</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the lesson</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_add_teach_can_edit",
            "description": "<p>is add teach can edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_notify_pri_teach_ans",
            "description": "<p>is notify pri teach ans</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_notify_all_teach_ans",
            "description": "<p>is notify all teach ans</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>Order</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>Course id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>Company id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[ 1 ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lessons.js",
    "groupTitle": "Lessons"
  },
  {
    "type": "post",
    "url": "lessons/",
    "title": "create lesson",
    "name": "CreateLesson",
    "group": "Lessons",
    "description": "<p>create lesson</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the lesson</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the lesson</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_add_teach_can_edit",
            "description": "<p>is add teach can edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_notify_pri_teach_ans",
            "description": "<p>is notify pri teach ans</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_notify_all_teach_ans",
            "description": "<p>is notify all teach ans</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order",
            "description": "<p>Order</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>Course id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>Company id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n       \"id\": 3,\n       \"name\": \"new lesson\",\n       \"description\": \"lesson descr\",\n       \"is_add_teach_can_edit\": true,\n       \"is_notify_pri_teach_ans\": true,\n       \"is_notify_all_teach_ans\": true,\n       \"order\": 1,\n       \"content\": \"lesson content\",\n       \"course_id\": 2,\n       \"company_id\": 1,\n       \"video_link\": null,\n       \"type_id\": null\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lessons.js",
    "groupTitle": "Lessons"
  },
  {
    "type": "delete",
    "url": "lessons/:id",
    "title": "delete lesson",
    "name": "DeleteLesson",
    "group": "Lessons",
    "description": "<p>delete lesson</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the lesson</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[1]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lessons.js",
    "groupTitle": "Lessons"
  },
  {
    "type": "get",
    "url": "lessons/",
    "title": "get lessons",
    "name": "GetLessons",
    "group": "Lessons",
    "description": "<p>get lessons</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n       {\n           \"id\": 1,\n           \"name\": \"name 1\",\n           \"description\": \"lesson descr\",\n           \"is_add_teach_can_edit\": true,\n           \"is_notify_pri_teach_ans\": true,\n           \"is_notify_all_teach_ans\": true,\n           \"order\": 1,\n           \"content\": \"lesson content\",\n           \"video_link\": null,\n           \"company_id\": 1,\n           \"course_id\": 2,\n           \"type_id\": null\n       },\n   ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lessons.js",
    "groupTitle": "Lessons"
  },
  {
    "type": "get",
    "url": "lessons/:id",
    "title": "Get lessons by course",
    "name": "lessonsByCourse",
    "group": "Lessons",
    "description": "<p>lessons by course</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of course</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n       {\n           \"id\": 1,\n           \"name\": \"name 1\",\n           \"description\": \"lesson descr\",\n           \"is_add_teach_can_edit\": true,\n           \"is_notify_pri_teach_ans\": true,\n           \"is_notify_all_teach_ans\": true,\n           \"order\": 1,\n           \"content\": \"lesson content\",\n           \"video_link\": null,\n           \"company_id\": 1,\n           \"course_id\": 2,\n           \"type_id\": null\n       },\n   ],",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lessons.js",
    "groupTitle": "Lessons"
  },
  {
    "type": "post",
    "url": "subscribes/",
    "title": "create subscribe",
    "name": "CreateSubscribe",
    "group": "Subscribes",
    "description": "<p>create subscribe</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "userIds",
            "description": "<p>user ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "groupIds",
            "description": "<p>group ids</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>Course id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of role</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "\"succees\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./subscribes.js",
    "groupTitle": "Subscribes"
  },
  {
    "type": "delete",
    "url": "subscribes/:id",
    "title": "delete subcribe",
    "name": "DeleteSubscribe",
    "group": "Subscribes",
    "description": "<p>delete subscribe</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the subscribe</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[1]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./subscribes.js",
    "groupTitle": "Subscribes"
  },
  {
    "type": "get",
    "url": "subscribes/",
    "title": "get subscribes",
    "name": "GetSubscribes",
    "group": "Subscribes",
    "description": "<p>get subscribes</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n           {\n               \"id\": 3,\n               \"type\": null,\n               \"course_id\": 2,\n               \"group_id\": null,\n               \"user_id\": 5\n           },\n   ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./subscribes.js",
    "groupTitle": "Subscribes"
  },
  {
    "type": "post",
    "url": "task_lessons/",
    "title": "create task_lesson",
    "name": "CreateTaskLesson",
    "group": "TaskLesson",
    "description": "<p>create TaskLesson</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lesson_id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n       \"id\": 1,\n       \"task_id\": 1,\n       \"lesson_id\": 1,\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_lessons.js",
    "groupTitle": "TaskLesson"
  },
  {
    "type": "put",
    "url": "task_test_answers/:id",
    "title": "change answers",
    "name": "ChangeAnswer",
    "group": "TaskTestAnswers",
    "description": "<p>change TaskTestAnswer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>answer id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>content</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "question_id",
            "description": "<p>question id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>company id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>course id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_correct_answer",
            "description": "<p>is correct answer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n         \"id\": 3,\n         \"content\": \"Maybe\",\n         \"question_id\": 1,\n         \"company_id\": 1,\n         \"course_id\": 3,\n         \"is_correct_answer\": true\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_test_answers.js",
    "groupTitle": "TaskTestAnswers"
  },
  {
    "type": "post",
    "url": "task_test_answers/",
    "title": "create answers",
    "name": "CreateAnswer",
    "group": "TaskTestAnswers",
    "description": "<p>create TaskTestAnswer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>content</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "question_id",
            "description": "<p>question id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>company id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>course id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_correct_answer",
            "description": "<p>is correct answer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n         \"id\": 3,\n         \"content\": \"Maybe\",\n         \"question_id\": 1,\n         \"company_id\": 1,\n         \"course_id\": 3,\n         \"is_correct_answer\": true\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_test_answers.js",
    "groupTitle": "TaskTestAnswers"
  },
  {
    "type": "delete",
    "url": "task_test_answers/:id",
    "title": "delete answers",
    "name": "DeleteAnswer",
    "group": "TaskTestAnswers",
    "description": "<p>delete TaskTestAnswer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>answer id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[ 1 ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_test_answers.js",
    "groupTitle": "TaskTestAnswers"
  },
  {
    "type": "get",
    "url": "task_test_answers/",
    "title": "get answers",
    "name": "GetAnswers",
    "group": "TaskTestAnswers",
    "description": "<p>get TaskTestAnswers</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n        {\n         \"id\": 1,\n         \"content\": \"Yes\",\n         \"is_correct_answer\": true,\n         \"company_id\": 1,\n         \"course_id\": 3,\n         \"question_id\": 1\n         },\n       ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_test_answers.js",
    "groupTitle": "TaskTestAnswers"
  },
  {
    "type": "get",
    "url": "task_test_answers/:id/:course_id",
    "title": "get answers by question",
    "name": "GetAnswersByQuestion",
    "group": "TaskTestAnswers",
    "description": "<p>get TaskTestAnswersByQuestion</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n        {\n         \"id\": 1,\n         \"content\": \"Yes\",\n         \"is_correct_answer\": true,\n         \"company_id\": 1,\n         \"course_id\": 3,\n         \"question_id\": 1\n         },\n       ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_test_answers.js",
    "groupTitle": "TaskTestAnswers"
  },
  {
    "type": "put",
    "url": "task_tests/:id",
    "title": "change task_tests",
    "name": "ChangeTaskTest",
    "group": "TaskTest",
    "description": "<p>change TaskTest</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>task test id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>task id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>company id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>course id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[ 1 ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_tests.js",
    "groupTitle": "TaskTest"
  },
  {
    "type": "post",
    "url": "task_tests/",
    "title": "create task_tests",
    "name": "CreateTaskTest",
    "group": "TaskTest",
    "description": "<p>Create TaskTest</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>task id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>company id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>course id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n        \"id\": 2,\n        \"task_id\": 2,\n        \"company_id\": 1,\n        \"course_id\": 3\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_tests.js",
    "groupTitle": "TaskTest"
  },
  {
    "type": "delete",
    "url": "task_tests/:id",
    "title": "delete task_tests",
    "name": "DeleteTaskTest",
    "group": "TaskTest",
    "description": "<p>delete TaskTest</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>task test id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[ 1 ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_tests.js",
    "groupTitle": "TaskTest"
  },
  {
    "type": "get",
    "url": "task_tests/",
    "title": "get task_tests",
    "name": "GetTaskTest",
    "group": "TaskTest",
    "description": "<p>get TaskTest</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n          \"id\": 1,\n          \"company_id\": 1,\n          \"course_id\": 3,\n          \"task_id\": 2\n      }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_tests.js",
    "groupTitle": "TaskTest"
  },
  {
    "type": "get",
    "url": "task_tests/:id/:course_id",
    "title": "get task_tests by task",
    "name": "GetTaskTestByTask",
    "group": "TaskTest",
    "description": "<p>get Task Test by task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>task id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":course_id",
            "description": "<p>course id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": " [\n {\n            \"task_id\": 2,\n            \"Task_test_questions\": [\n                {\n                    \"id\": 1,\n                    \"content\": \"Be or no to be?\",\n                    \"company_id\": 1,\n                    \"course_id\": 3,\n                    \"test_id\": 1,\n                    \"Task_test_answers\": [\n                        {\n                            \"id\": 1,\n                            \"content\": \"Yes\",\n                            \"is_correct_answer\": true\n                        },\n                        {\n                            \"id\": 2,\n                            \"content\": \"No\",\n                            \"is_correct_answer\": true\n                        }\n                    ]\n                }\n            ]\n        },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_tests.js",
    "groupTitle": "TaskTest"
  },
  {
    "type": "put",
    "url": "task_test_questions/:id",
    "title": "change question",
    "name": "ChangeQuestion",
    "group": "TaskTestQuestions",
    "description": "<p>change TaskTestQuestion</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>question id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>content of the question</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "test_id",
            "description": "<p>test id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>course id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>company id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n             1\n           ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_test_questions.js",
    "groupTitle": "TaskTestQuestions"
  },
  {
    "type": "post",
    "url": "task_test_questions/",
    "title": "create question",
    "name": "CreateQuestion",
    "group": "TaskTestQuestions",
    "description": "<p>create TaskTestQuestion</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>content of the question</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "test_id",
            "description": "<p>test id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>course id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>company id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n             {\n                 \"id\": 1,\n                 \"content\": \"Be or no to be?\",\n                 \"company_id\": 1,\n                 \"course_id\": 3,\n                 \"test_id\": 1\n             }\n           ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_test_questions.js",
    "groupTitle": "TaskTestQuestions"
  },
  {
    "type": "delete",
    "url": "task_test_questions/:id",
    "title": "delete question",
    "name": "DeleteQuestion",
    "group": "TaskTestQuestions",
    "description": "<p>delete TaskTestQuestion</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>question id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>content of the question</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "test_id",
            "description": "<p>test id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>course id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>company id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n       1\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_test_questions.js",
    "groupTitle": "TaskTestQuestions"
  },
  {
    "type": "get",
    "url": "task_test_questions/",
    "title": "get questions",
    "name": "GetQuestions",
    "group": "TaskTestQuestions",
    "description": "<p>get TaskTestQuestions</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n         {\n             \"id\": 1,\n             \"content\": \"Be or no to be?\",\n             \"company_id\": 1,\n             \"course_id\": 3,\n             \"test_id\": 1\n         }\n   ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_test_questions.js",
    "groupTitle": "TaskTestQuestions"
  },
  {
    "type": "get",
    "url": "task_test_questions/:id/:course_id",
    "title": "get question by task",
    "name": "getQuestionsByTask",
    "group": "TaskTestQuestions",
    "description": "<p>get get Questions By Task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>task id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":course_id",
            "description": "<p>course id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n        {\n           \"id\": 1,\n           \"content\": \"Be or no to be?\",\n           \"company_id\": 1,\n           \"course_id\": 3,\n           \"test_id\": 1\n       },\n     ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./task_test_questions.js",
    "groupTitle": "TaskTestQuestions"
  },
  {
    "type": "put",
    "url": "tasks/:id",
    "title": "change task",
    "name": "ChangeTask",
    "group": "Tasks",
    "description": "<p>change task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the task</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_important",
            "description": "<p>is important</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_hidden_from_others",
            "description": "<p>is_hidden_from_others</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>Course id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": " [\n   1\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./tasks.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "post",
    "url": "tasks/",
    "title": "create task",
    "name": "CreateTask",
    "group": "Tasks",
    "description": "<p>create task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the task</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the task</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_important",
            "description": "<p>is important</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_hidden_from_others",
            "description": "<p>is_hidden_from_others</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>Course id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "\n{\n    \"id\": 2,\n    \"name\": \"web week 1\",\n    \"description\": \"task descr\",\n    \"is_important\": true,\n    \"is_hidden_from_others\": true,\n    \"course_id\": 3,\n    \"company_id\": 2\n},",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./tasks.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "delete",
    "url": "tasks/:id",
    "title": "delete task",
    "name": "DeleteTask",
    "group": "Tasks",
    "description": "<p>delete task</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the task</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": " [\n   1\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./tasks.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "tasks/",
    "title": "get tasks",
    "name": "GetTasks",
    "group": "Tasks",
    "description": "<p>get tasks</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n         {\n             \"id\": 2,\n             \"name\": \"web week 1\",\n             \"description\": \"task descr\",\n             \"is_important\": true,\n             \"is_hidden_from_others\": true,\n             \"company_id\": 2,\n             \"course_id\": 3\n         },\n       ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./tasks.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "get",
    "url": "tasks/",
    "title": "get tasks",
    "name": "GetTasks",
    "group": "Tasks",
    "description": "<p>get tasks</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n         {\n             \"id\": 2,\n             \"name\": \"web week 1\",\n             \"description\": \"task descr\",\n             \"is_important\": true,\n             \"is_hidden_from_others\": true,\n             \"company_id\": 2,\n             \"course_id\": 3\n         },\n       ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./tasks.js",
    "groupTitle": "Tasks"
  },
  {
    "type": "put",
    "url": "type_lessons/:id",
    "title": "change type lessons",
    "name": "ChangeTypeLessons",
    "group": "TypeLessons",
    "description": "<p>change lessons type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the type lesson</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the type lesson</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n             1\n         ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./type_lessons.js",
    "groupTitle": "TypeLessons"
  },
  {
    "type": "post",
    "url": "type_lessons/",
    "title": "create type lessons",
    "name": "CreateTypeLessons",
    "group": "TypeLessons",
    "description": "<p>create lessons type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the type lesson</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n           {\n               \"id\": 1,\n               \"name\": \"type 1\"\n           }\n         ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./type_lessons.js",
    "groupTitle": "TypeLessons"
  },
  {
    "type": "delete",
    "url": "type_lessons/:id",
    "title": "delete type lessons",
    "name": "DeleteTypeLessons",
    "group": "TypeLessons",
    "description": "<p>delete lessons type</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the type lesson</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n             1\n         ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./type_lessons.js",
    "groupTitle": "TypeLessons"
  },
  {
    "type": "get",
    "url": "type_lessons/",
    "title": "get type lessons",
    "name": "GetTypeLessons",
    "group": "TypeLessons",
    "description": "<p>get lessons type</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[\n           {\n               \"id\": 1,\n               \"name\": \"type 1\"\n           }\n       ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./type_lessons.js",
    "groupTitle": "TypeLessons"
  },
  {
    "type": "put",
    "url": "users/:id",
    "title": "change user",
    "name": "ChangeUser",
    "group": "Users",
    "description": "<p>change user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>lesson id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>surname of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>role</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>Company id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[ 1 ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "users/:id",
    "title": "delete user",
    "name": "DeleteUser",
    "group": "Users",
    "description": "<p>delete user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>id of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[1]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "users/roles",
    "title": "get roles",
    "name": "GetRoles",
    "group": "Users",
    "description": "<p>get roles</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": " [\n              {\n               \"name\": \"????????????????????\",\n               \"originalName\": \"superadmin\"\n              },\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "users/",
    "title": "get users",
    "name": "GetUsers",
    "group": "Users",
    "description": "<p>get users</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "[{\n              \"id\": 2,\n              \"name\": \"admin\",\n              \"surname\": \"admin1\",\n              \"email\": \"adminadmin@gmail.com\",\n              \"phone\": \"+77471194810\",\n              \"password\": \"$2a$10$vj0457K5W5qh2N0r2BRznunlO6SepgUACo83UZLkk5Xic5Zvc3i56\",\n              \"role\": \"admin\",\n              \"account_name\": null,\n              \"company_id\": 1\n            },]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/admin/register",
    "title": "admin registration",
    "name": "RegisterAdmin",
    "group": "Users",
    "description": "<p>registration for admin without company_id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>surname of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>role</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n         \"id\": 8,\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJ1c2VyNEBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYwMzQ0Mjc1OCwiZXhwIjoxNjA4OTA4MTA0fQ.wtA4pOXSi5clRQFAzyVUVr-nK2iuUIpRP5sL0-mX-l4\",\n         \"role\": \"user\"\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/superadmin/register",
    "title": "superadmin registration",
    "name": "RegisterSuperadmin",
    "group": "Users",
    "description": "<p>registration for superadmin with company_id for admin registration</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>surname of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>role</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "company_id",
            "description": "<p>company_id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n         \"id\": 8,\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJ1c2VyNEBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYwMzQ0Mjc1OCwiZXhwIjoxNjA4OTA4MTA0fQ.wtA4pOXSi5clRQFAzyVUVr-nK2iuUIpRP5sL0-mX-l4\",\n         \"role\": \"user\"\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/register",
    "title": "user registration",
    "name": "RegisterUser",
    "group": "Users",
    "description": "<p>only user registration</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>surname of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n         \"id\": 8,\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiZW1haWwiOiJ1c2VyNEBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYwMzQ0Mjc1OCwiZXhwIjoxNjA4OTA4MTA0fQ.wtA4pOXSi5clRQFAzyVUVr-nK2iuUIpRP5sL0-mX-l4\",\n         \"role\": \"user\"\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "users/current",
    "title": "current user",
    "name": "current",
    "group": "Users",
    "description": "<p>current user</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n         \"id\": 5,\n         \"role\": \"user\",\n         \"company_id\": 1,\n         \"name\": \"User2\",\n         \"surname\": \"userov\",\n         \"email\": \"user2@gmail.com\",\n         \"account_name\": null,\n         \"phone\": \"+77471194810\"\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "users/login",
    "title": "login",
    "name": "login",
    "group": "Users",
    "description": "<p>user login</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n         \"id\": 3,\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJhZG1pbiIsImlhdCI6MTYwMzQ0Mjc4OSwiZXhwIjoxNjA4OTA4MTM1fQ.cNm84alDmFETqZXGrJ_KissZjhV8LNlt-2nmCcO5uy0\",\n         \"role\": \"superadmin\"\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "users/resetpassword/:id",
    "title": "reset password",
    "name": "resetpassword",
    "group": "Users",
    "description": "<p>reset password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":id",
            "description": "<p>user id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": "{\n         Your password is 'password'!\n       }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "users/usersSubscribedCourses",
    "title": "Get user's subsribed courses",
    "name": "userSubscribedCourses",
    "group": "Users",
    "description": "<p>user Subscribed Courses</p>",
    "success": {
      "examples": [
        {
          "title": "Data:",
          "content": " {\n        \"id\": 5,\n        \"Subscribes\": [\n            {\n                \"id\": 3,\n                \"Course\": {\n                    \"id\": 2,\n                    \"name\": \"ICT\",\n                    \"description\": \"course 1 description\",\n                    \"primary_teacher_id\": 1,\n                    \"is_add_teach_can_edit\": true,\n                    \"is_notify_pri_teach_ans\": true,\n                    \"is_notify_all_teach_ans\": true,\n                    \"order\": 1,\n                    \"access_type_id\": 1,\n                    \"company_id\": 1\n                }\n            },\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./users.js",
    "groupTitle": "Users"
  }
] });
