# 카카오 이미지 검색창 개발

## 요구사항

### 개발언어

```
Reactjs
```

### 기능요구사항

```
검색창 + 검색결과 UI (이미지 검색)
템플릿 사용해도 무방
카카오 이미지 검색 API 사용
```

### 개발시 고려사항

```
이미지 로드 성능 최적화
무한 스크롤 적용(1page당 10개 리스트 노출)화면 스켈레톤 또는 로딩 프로그레스 적용
이미지 프레임 영역안에 다양한 사이즈 이미지 fit할 수 있도록
-> "image url"사용, 디폴트 이미지 적용
최근 검색어 노출
모바일웹으로 작성
-> 브라우저 뷰포트 사이즈에 맞게 플렉서블 하게 대응되도록 작업
```

## 구현

### 환경 설정

```
언어 : React + typescript
bolierplate : create-react-app
보조 : eslint + prettier
```

### 기본 구현

```
구성 : 검색창 + 필터 + Card 뷰어
```

### 초기상태

![image](https://user-images.githubusercontent.com/25495214/226099581-edfb5b69-9d4a-420f-9b0a-01315aa38b8c.png)

### 검색시

![image](https://user-images.githubusercontent.com/25495214/226099669-a6d64497-d125-44ec-8b8f-d024ba3a10b0.png)

### 검색어

![image](https://user-images.githubusercontent.com/25495214/226099683-5d2f75a3-819c-4790-90f6-a10498532ccb.png)

### 오류이미지 처리

![image](https://user-images.githubusercontent.com/25495214/226099758-b774b1ad-9a16-4aa5-9a24-79bddb7a7d7d.png)

### 고려사항 구현

```
이미지 로드 성능 최적화
-> lazy load로 viewport에 있는이미지만 로드되도록함
무한 스크롤 적용(1page당 10개 리스트 노출)화면 스켈레톤 또는 로딩 프로그레스 적용
-> 스크롤이 하단 마지막으로 가면 Kakao API를 통해서 10개 불러오도록함
이미지 프레임 영역안에 다양한 사이즈 이미지 fit할 수 있도록 함, "image url"사용, 디폴트 이미지 적용
-> 이미지 fit 하게 함, error시 디폴트 이미지 사용
최근 검색어 노출
-> 최근 검색어 10개 노출, 중복 키워드 허용안함, 중복시 최상위로 올라가도록함
모바일웹으로 작성, 브라우저 뷰포트 사이즈에 맞게 플렉서블 하게 대응되도록 작업
-> 반응형으로 개발함 media query로 size에 맞게 한 row에 카드게 1~6개까지 보이도록함.
```

## 실행

### yarn start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### yarn build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.
1
