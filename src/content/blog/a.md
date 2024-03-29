---
title: '인덱스나우(IndexNow)를 사용해서 블로그 색인하기, 네이버에서도 지원'
description: '네이버도 지원하기 시작한 인덱스나우란 무엇일까요? 우리 블로그가 좀더 인덱싱이 잘되도록 하는 방법에 대해 알아봅시다.'
date: '2023-9-16'
image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
category: '기술'
---

## IndexNow 란 무엇일까 ?

IndexNow는 웹마스터, 웹사이트 소유자들에게 자신들의 웹사이트에서 최근 내용 변경 사항을 즉시 검색 엔진에 알릴 수 있는 간단한 방법입니다. 가장 간단한 형태로, indexnow는 URL과 해당 콘텐츠가 추가, 업데이트 또는 삭제되었음을 검색 엔진에 알리는 단순한 핑(ping)입니다. 이를 통해 검색 엔진은 신속하게 이러한 변경 사항을 검색 결과에 반영할 수 있습니다.

indexnow를 사용하지 않으면, 콘텐츠가 변경되었다는 사실을 검색 엔진이 발견하는 데 일주일에서 몇 주까지 걸릴 수 있습니다. 왜냐하면 검색 엔진은 모든 URL을 충분히 자주 크롤링 하지 않기 때문입니다. 그러나 indexnow를 사용하면, 검색 엔진은 즉시 "변경된 URL"을 확인하고 이러한 URL의 크롤링 우선순위를 높여 새로운 콘텐츠를 발견하기 위해 유기적인 크롤링(organic crawling) 작업 범위를 제한할 수 있습니다.

### 누가 만들었나요 ?

마이크로소프트 빙(Microsoft Bing), 얀덱스(Yandex), 여러분들에겐 좀 생소한 세즈남(seznam) 등의 전 세계에서 인정받는 검색 엔진들이 공동으로 개발한 프로토콜입니다.

## IndexNow는 어떻게 작동할까 ?

프로토콜의 작동 방식은 어렵지 않습니다. 서버에서 키를 생성하고, 검색엔진에 URL을 제출하여 IndexNow 사용을 검색엔진에 알릴 수 있습니다.

여기에서 API키를 발급 받을 수 있습니다.

웹사이트의 루트에 발급받은 API 키를 파일명으로 작성하고 텍스트 파일로 업로드합니다. 텍스트 파일의 내용도 API 키여야 합니다.

워드프레스의 경우에는 플러그인도 지원합니다. 워드프레스 정보 전문 블로그인 워드프레스정보꾸러미 에서 적용방법과 상세한 내용을 확인할 수 있습니다.

