카테고리	기능	      메소드 	엔드포인트 	                   요청바디 	                
조회	블로그 글 목록 조회	Get	/api/Articles	  없음      	                               
성공시 응답 
 {
    "data": [
        {
            "id": 1,
            "attributes": {
                "title": "김밥",
                "body": "5천원",
                "boolean": null,
                "number": null,
                "createdAt": "2022-05-04T12:24:23.712Z",
                "updatedAt": "2022-05-04T12:29:48.681Z",
                "publishedAt": "2022-05-04T12:24:38.102Z"
            }
        },
        {
            "id": 2,
            "attributes": {
                "title": "스테이크",
                "body": "5만원",
                "boolean": null,
                "number": null,
                "createdAt": "2022-05-04T12:24:34.843Z",
                "updatedAt": "2022-05-04T12:24:35.673Z",
                "publishedAt": "2022-05-04T12:24:35.672Z"
            }
        },
        {
            "id": 3,
            "attributes": {
                "title": "짬뽕",
                "body": "8천원",
                "boolean": null,
                "number": null,
                "createdAt": "2022-05-04T12:24:46.559Z",
                "updatedAt": "2022-05-04T12:26:04.364Z",
                "publishedAt": "2022-05-04T12:26:04.361Z"
            }
        },
        {
            "id": 4,
            "attributes": {
                "title": "치킨",
                "body": "3만원",
                "boolean": null,
                "number": null,
                "createdAt": "2022-05-04T12:24:59.110Z",
                "updatedAt": "2022-05-04T12:26:06.498Z",
                "publishedAt": "2022-05-04T12:26:06.496Z"
            }
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 4
        }
    }
}

조회	특정 블로그 글 조회	Get	/api/Articles/id  없음	                                        
성공시 응답
{
    "data": {
        "id": 1,
        "attributes": {
            "title": "김밥",
            "body": "5천원",
            "boolean": null,
            "number": null,
            "createdAt": "2022-05-04T12:24:23.712Z",
            "updatedAt": "2022-05-04T12:29:48.681Z",
            "publishedAt": "2022-05-04T12:24:38.102Z"
        }
    },
    "meta": {}
}

조회	모든 댓글 조회	   Get	/api/comments	 없음	                                       
성공시 응답
{
    "data": [
        {
            "id": 1,
            "attributes": {
                "comments": "오늘 저녁?",
                "createdAt": "2022-05-04T12:25:33.959Z",
                "updatedAt": "2022-05-04T12:26:08.711Z",
                "publishedAt": "2022-05-04T12:26:08.709Z"
            }
        },
        {
            "id": 2,
            "attributes": {
                "comments": "굽네치킨 불금치킨",
                "createdAt": "2022-05-04T12:50:39.026Z",
                "updatedAt": "2022-05-04T12:50:57.121Z",
                "publishedAt": "2022-05-04T12:50:57.119Z"
            }
        }
    ],
    "meta": {
        "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 2
        }
    }
}

조회	특정 댓글 조회	   Get	/api/comments/id	 없음 	                                       
성공시 응답
{
    "data": {
        "id": 1,
        "attributes": {
            "comments": "오늘 저녁?",
            "createdAt": "2022-05-04T12:25:33.959Z",
            "updatedAt": "2022-05-04T12:26:08.711Z",
            "publishedAt": "2022-05-04T12:26:08.709Z"
        }
    },
    "meta": {}
}

생성	새 블로그 글 생성  Post	/api/Articles	               요청바디                            
                                                        {
                                                        "data": {
                                                        "title":"피자",
                                                        "body":"4만원"
                                                        }
                                                        }
 성공 시 응답                                                       
{
    "data": {
        "id": 5,
        "attributes": {
            "title": "피자",
            "body": "4만원",
            "boolean": null,
            "number": null,
            "createdAt": "2022-05-04T12:53:23.227Z",
            "updatedAt": "2022-05-04T12:53:23.227Z",
            "publishedAt": "2022-05-04T12:53:23.225Z"
        }
    },
    "meta": {}
}

생성	새 댓글 생성  Post /api/comments?populate=article  요청바디                                                                       	                                                     {
                                                        {
                                                        "data": {
                                                        "comments":"나도 먹을래",
                                                        "article": {
                                                        "id": 4
                                                        }
                                                        }
                                                        }
성공 시 응답                                                      
 {
    "data": {
        "id": 3,
        "attributes": {
            "comments": "나도 먹을래",
            "createdAt": "2022-05-04T12:58:59.469Z",
            "updatedAt": "2022-05-04T12:58:59.469Z",
            "publishedAt": "2022-05-04T12:58:59.467Z",
            "article": {
                "data": {
                    "id": 4,
                    "attributes": {
                        "title": "치킨",
                        "body": "3만원",
                        "boolean": null,
                        "number": null,
                        "createdAt": "2022-05-04T12:24:59.110Z",
                        "updatedAt": "2022-05-04T12:26:06.498Z",
                        "publishedAt": "2022-05-04T12:26:06.496Z"
                    }
                }
            }
        }
    },
    "meta": {}
}                                                       

삭제	특정 블로그 글 삭제	Delete	/api/Articles/id 없음
성공 시 응답                                        
{
    "data": {
        "id": 1,
        "attributes": {
            "title": "김밥",
            "body": "5천원",
            "boolean": null,
            "number": null,
            "createdAt": "2022-05-04T12:24:23.712Z",
            "updatedAt": "2022-05-04T12:29:48.681Z",
            "publishedAt": "2022-05-04T12:24:38.102Z"
        }
    },
    "meta": {}
}
삭제	특정 댓글 삭제	Delete	/api/comments/id	없음
성공 시 응답	                                    
{
    "data": {
        "id": 1,
        "attributes": {
            "comments": "오늘 저녁?",
            "createdAt": "2022-05-04T12:25:33.959Z",
            "updatedAt": "2022-05-04T12:26:08.711Z",
            "publishedAt": "2022-05-04T12:26:08.709Z"
        }
    },
    "meta": {}
}
수정	특정 블로그 글 수정	Put	/api/Articles/id	                                            
                                                        {
                                                        "data": {
                                                        "title":"자장면",
                                                        "body":"신메뉴 특가 5천원"
                                                        }
                                                        }
 성공 시 응답
{
"data": {
"title":"자장면",
"body":"신메뉴 특가 5천원"
}
}
                                                       

수정	특정 댓글 수정	Put	/api/comments/id	                                               
                                                        {
                                                        "data": {
                                                        "comments":"내꺼 남겨놨어?",
                                                        "article": {
                                                        "id": 2
                                                        }
                                                        }
                                                        }
성공 시 응답
                                                        {
    "data": {
        "id": 2,
        "attributes": {
            "comments": "내꺼 남겨놨어?",
            "createdAt": "2022-05-04T12:50:39.026Z",
            "updatedAt": "2022-05-04T13:03:03.867Z",
            "publishedAt": "2022-05-04T12:50:57.119Z"
        }
    },
    "meta": {}
}
\