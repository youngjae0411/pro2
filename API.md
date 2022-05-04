카테고리	기능	      메소드 	엔드포인트 	                   요청바디 	                 성공시 응답
조회	블로그 글 목록 조회	Get	/api/Articles	  없음      	                                200
조회	특정 블로그 글 조회	Get	/api/Articles/id  없음	                                        200
조회	모든 댓글 조회	   Get	/api/comment	 없음	                                       200
조회	특정 댓글 조회	   Get	/api/comment/id	 없음 	                                       200
생성	새 블로그 글 생성  Post	/api/Articles	                                              200
                                                        {
                                                        "data": {
                                                        "title":"술 한잔 했습니다..",
                                                        "body":"영화가 망해도 좋습니다"
                                                         }
                                                         }
생성	새 댓글 생성  Post /api/comments?populate=article                                   200                                       	                                                        {
                                                        {
                                                        "data": {
                                                        "comments":"프린스송?",
                                                        "article": {
                                                        "id": 4
                                                        }
                                                        }
                                                        }

삭제	특정 블로그 글 삭제	Delete	/api/Articles/id 없음                                        200
삭제	특정 댓글 삭제	Delete	/api/comments/id	없음	                                    200
수정	특정 블로그 글 수정	Put	/api/Articles/id	                                            200
                                                        {
                                                        "data": {
                                                        "title":"품절이라구!",
                                                        "body":"장사 접는다니까"
                                                        }
                                                        }

수정	특정 댓글 수정	Put	/api/comments/id	                                               200
                                                        {
                                                        "data": {
                                                        "comments":"안녕 못해",
                                                        "article": {
                                                        "id": 2
                                                        }
                                                        }
                                                        }
\