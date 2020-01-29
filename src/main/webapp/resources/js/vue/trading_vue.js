"use strict";
var trading_vue = trading_vue || {}
trading_vue = {
	trading_mainbody : x=>{
		return `<body style="width: auto; height: auto;">
  <div id="main_div" border="2" bordercolor="black" style="width: 1500px; height: 600px; margin-left: 7% background-color:red;>
     <div id="d_one" style="width: 975px; height: 300px; overflow: auto; background-color: white; float: left;">
        <table id="tab1" border="1" bordercolor="black" style="width: 975px; height: 300px; table-layout: fixed; background-color: white; text-align: center;" >
               <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                 <td id="btn_mystock" colspan="3">관심</td>
                 <td id="btn_lead" colspan="3">주도업종</td>
                 <td id="btn_rank" colspan="3">순위</td>
                 <td id="btn_balance" colspan="3">잔고</td>
                 <td id="btn_da"colspan="3">예수금</td>
                 <td id="btn_log" colspan="3">일지</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px; background-color: white">
                <td id="btn_lmystock" colspan="2">보유종목</td>
                <td id="btn_attention" colspan="2">관심종목</td>
               </tr>
               <tr id="attention_title" border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">종목명</td>
                <td colspan="2">현재가</td>
                <td colspan="2">대비</td>
                <td colspan="2">등락률</td>
                <td colspan="2">시가</td>
                <td colspan="2">고가</td>
                <td colspan="2">저가</td>
                <td colspan="2">매도호가</td>
                <td colspan="2">매수호가</td>
                <td colspan="2">거래량</td>
            </tr>
               <tr id="attention_data" style="width: 100%;">
                <td colspan="2" style="text-align: left;">보유종목명 data</td>
                <td colspan="2" style="text-align: center;">현재가 data</td>
                <td colspan="2" style="text-align: center;">대비 data</td>
                <td colspan="2" style="text-align: center;">등락률 data</td>
                <td colspan="2" style="text-align: center;">시가 data</td>
                <td colspan="2" style="text-align: left;">고가 data</td>
                <td colspan="2" style="text-align: left;">저가 data</td>
                <td colspan="2" style="text-align: left;">매도호가 data</td>
                <td colspan="2" style="text-align: left;">매수호가 data</td>
                <td colspan="2" style="text-align: left;">거래량 data</td>
          </tr>
             </table>
     </div>    
     <div id="d_two" style="width: 525px; height: 600px; overflow: auto; background-color: white; float: right;">
        <table id="tab2" border="1" bordercolor="black" style="width: 100%; height: 100%; text-align: center;">
        <tr style="background-color: #B5C7EC">
         <!-- 현재가 -->
            <td>현재가</td>
            <td>업종</td>
            <td><input type="text" name="stockcode" value="종목명"></td>
            <td><button>검색</button></td>
            <td>종목코드</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">현재가</td>
            <td colspan="2">현재가 data</td>
            <td style="background-color: #84A3E0">상한가</td>
            <td>상한가 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">대비</td>
            <td colspan="2">대비 data</td>
            <td style="background-color: #84A3E0">하한가</td>
            <td>하한가 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">등락률</td>
            <td colspan="2">등락률 data</td>
            <td style="background-color: #84A3E0">제한폭</td>
            <td>제한폭 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">매도호가</td>
            <td colspan="2">매도호가 data</td>
            <td style="background-color: #84A3E0">호가단위</td>
            <td>호가단위 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">매수호가</td>
            <td colspan="2">매수호가 data</td>
            <td style="background-color: #84A3E0">액면가</td>
            <td>100(원)</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">시가</td>
            <td colspan="2">시가 data</td>
            <td style="background-color: #84A3E0">대용가</td>
            <td>대용가 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">고가</td>
            <td colspan="2">고가 data</td>
            <td style="background-color: #84A3E0">자본금</td>
            <td>자본금 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">저가</td>
            <td colspan="2">저가 data</td>
            <td style="background-color: #84A3E0">총주식수</td>
            <td>총주식수 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">전일종가</td>
            <td colspan="2">전일종가 data</td>
            <td style="background-color: #84A3E0">외인한도</td>
            <td>외인한도 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">전일거래량</td>
            <td colspan="2">전일거래량 data</td>
            <td style="background-color: #84A3E0">외인가능</td>
            <td>외인가능 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">거래량</td>
            <td colspan="2">거래량 data</td>
            <td style="background-color: #84A3E0">외인취득</td>
            <td>외인취득 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">거래대금</td>
            <td colspan="2">거래대금 data</td>
            <td style="background-color: #84A3E0">외인매수</td>
            <td>외인매수 data</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">시가총액</td>
            <td colspan="2">시가총액 data</td>
            <td style="background-color: #84A3E0">일반(20%)</td>
            <td>신용가능</td>
          </tr>
          <tr>
            <td style="background-color: #84A3E0">예상체결가</td>
            <td colspan="2"> </td>
            <td style="background-color: #84A3E0">예상체결량</td>
            <td> </td>
          </tr>
      </table>
     </div>
     <div id="d_three" style="width: 975px; height: 300px; overflow: auto; float: left; background-color: white">
        <table id="tab3" border="1" bordercolor="black" style="width: 100%; height: 100%; table-layout: fixed; text-align: center;">
          <tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0; ">
            <td colspan="3">시간대별</td>
            <td colspan="2">현재가</td>
            <td colspan="2">전일대비</td>
            <td colspan="2">등락률</td>
            <td colspan="2">체결량</td>
            <td colspan="3">거래량</td>
            <td colspan="2">체결강도</td>
            <td colspan="2">매도호가</td>
            <td colspan="2">매수호가</td>
          </tr>
          <tr style="background-color: white">
            <td colspan="3">시간 data</td>            
            <td colspan="2">현재가 data</td>
            <td colspan="2">전일대비 data</td>
            <td colspan="2">등락률 data</td>
            <td colspan="2">체결량 data</td>
            <td colspan="3">거래량 data</td>
            <td colspan="2">체결강도 data</td>
            <td colspan="2">매도호가 data</td>
            <td colspan="2">매수호가 data</td>
          </tr>
      </table>
     </div>
   </div>
</body>`
  },
  trading_mystock : ()=>{
    return `
               <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                 <td id="btn_mystock" colspan="3">관심</td>
                 <td id="btn_lead" colspan="3">주도업종</td>
                 <td id="btn_rank" colspan="3">순위</td>
                 <td id="btn_balance" colspan="3">잔고</td>
                 <td id="btn_da"colspan="3">예수금</td>
                 <td id="btn_log" colspan="3">일지</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <!-- 보유종목 일떄 -->
                <td id="btn_lmystock" colspan="2">보유종목</td>
                <td id="btn_attention" colspan="2">관심종목</td>
               </tr>
               <tr id="attention_title" border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">종목명</td>
                <td colspan="2">현재가</td>
                <td colspan="2">대비</td>
                <td colspan="2">등락률</td>
                <td colspan="2">시가</td>
                <td colspan="2">고가</td>
                <td colspan="2">저가</td>
                <td colspan="2">매도호가</td>
                <td colspan="2">매수호가</td>
                <td colspan="2">거래량</td>
            </tr>
               <tr id="attention_data" style="width: 100%;">
                <td colspan="2" style="text-align: left;">보유종목명 data</td>
                <td colspan="2" style="text-align: center;">현재가 data</td>
                <td colspan="2" style="text-align: center;">대비 data</td>
                <td colspan="2" style="text-align: center;">등락률 data</td>
                <td colspan="2" style="text-align: center;">시가 data</td>
                <td colspan="2" style="text-align: left;">고가 data</td>
                <td colspan="2" style="text-align: left;">저가 data</td>
                <td colspan="2" style="text-align: left;">매도호가 data</td>
                <td colspan="2" style="text-align: left;">매수호가 data</td>
                <td colspan="2" style="text-align: left;">거래량 data</td>
          </tr>
             `
  },
  trading_attention : ()=>{
    return `
               <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                 <td id="btn_lmystock" colspan="3">관심</td>
                 <td id="btn_lead" colspan="3">주도업종</td>
                 <td id="btn_rank" colspan="3">순위</td>
                 <td id="btn_balance" colspan="3">잔고</td>
                 <td id="btn_da"colspan="3">예수금</td>
                 <td id="btn_log" colspan="3">일지</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <!-- 관심종목 일떄 -->
                <td id="btn_mystock" colspan="2">보유종목</td>
                <td id="btn_attention" colspan="2">관심종목</td>
               </tr>
               <tr id="attention_title" border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">종목명</td>
                <td colspan="2">현재가</td>
                <td colspan="2">대비</td>
                <td colspan="2">등락률</td>
                <td colspan="2">시가</td>
                <td colspan="2">고가</td>
                <td colspan="2">저가</td>
                <td colspan="2">매도호가</td>
                <td colspan="2">매수호가</td>
                <td colspan="2">거래량</td>
            </tr>
               <tr id="attention_data" style="width: 100%;">
                <td colspan="2" style="text-align: left;">관심종목명 data</td>
                <td colspan="2" style="text-align: center;">현재가 data</td>
                <td colspan="2" style="text-align: center;">대비 data</td>
                <td colspan="2" style="text-align: center;">등락률 data</td>
                <td colspan="2" style="text-align: center;">시가 data</td>
                <td colspan="2" style="text-align: left;">고가 data</td>
                <td colspan="2" style="text-align: left;">저가 data</td>
                <td colspan="2" style="text-align: left;">매도호가 data</td>
                <td colspan="2" style="text-align: left;">매수호가 data</td>
                <td colspan="2" style="text-align: left;">거래량 data</td>
          </tr>`
  },
  trading_lead : ()=>{
    return ` <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                 <td id="btn_mystock" colspan="3">관심</td>
                 <td id="btn_lead" colspan="3">주도업종</td>
                 <td id="btn_rank" colspan="3">순위</td>
                 <td id="btn_balance" colspan="3">잔고</td>
                 <td id="btn_da"colspan="3">예수금</td>
                 <td id="btn_log" colspan="3">일지</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <td colspan="3">
                <input type="radio" name="kospi" value="코스피">코스피
                <input type="radio" name="kosdak" value="코스닥">코스닥
                </td>
               </tr>
               <tr border="1"; bordercolor="black"; style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <!-- 주도업종, 코스피일때 화면 -->
                <td colspan="4" rowspan="2">업종명</td>
                <td colspan="6" style="background-color:skyblue">시작일</td>
                <td colspan="6" style="background-color:pink">종료일</td>
                <td colspan="4" rowspan="2">상승률</td>
                </tr>
               <tr border="1"; bordercolor="black"; style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                    <td colspan="3">시가총액(억원)</td>
                    <td colspan="3">비중</td>
                    <td colspan="3">시가총액(억원)</td>
                    <td colspan="3">비중</td>
                  </tr>
                  <tr id="attention_data" style="width: 100%;">
                    <td colspan="4" style="text-align: center;">업종명 data</td>
                    <td colspan="3" style="text-align: center;">시작일 시가총액 data</td>
                    <td colspan="3" style="text-align: center;">시작일 비중 data</td>
                    <td colspan="3" style="text-align: center;">종료일 시가총액 data</td>
                    <td colspan="3" style="text-align: center;">종료일 비중 data</td>
                    <td colspan="4" style="text-align: center;">상승률 data</td>
                </tr>`
  },
  trading_rank: ()=>{
    return ` <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                 <td id="btn_mystock" colspan="3">관심</td>
                 <td id="btn_lead" colspan="3">주도업종</td>
                 <td id="btn_rank" colspan="3">순위</td>
                 <td id="btn_balance" colspan="3">잔고</td>
                 <td id="btn_da"colspan="3">예수금</td>
                 <td id="btn_log" colspan="3">일지</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <td colspan="3">
                <input type="radio" name="kospi" value="코스피">코스피
                <input type="radio" name="kosdak" value="코스닥">코스닥
                </td>
                <td colspan="2">
                  <select name="choice">
                    <option value="up">상승률</option>
                  <option value="down">하락률</option>
                  </select>
                </td>
               </tr>
               <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="3">종목명</td>
                <td colspan="3">현재가</td>
                <td colspan="2">전일대비</td>
                <td colspan="2">등락률</td>
                <td colspan="3">거래량</td>
                <td colspan="3">기준가격</td>
                <td colspan="2">상승률</td>
                <td colspan="2">체결강도</td>
            </tr>
               <tr style="width: 100%;">
                <td colspan="3" style="text-align: left;">종목명 data</td>
                <td colspan="3" style="text-align: center;">현재가 data</td>
                <td colspan="2" style="text-align: center;">전일대비 data</td>
                <td colspan="2" style="text-align: center;">등락률 data</td>
                <td colspan="3" style="text-align: center;">거래량 data</td>
                <td colspan="3" style="text-align: left;">기준가격 data</td>
                <td colspan="2" style="text-align: left;">상승률 data</td>
                <td colspan="2" style="text-align: left;">체결강도 data</td>
          </tr>`
  },
  trading_balance:()=>{
    return ` <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                 <td id="btn_mystock" colspan="3">관심</td>
                 <td id="btn_lead" colspan="3">주도업종</td>
                 <td id="btn_rank" colspan="3">순위</td>
                 <td id="btn_balance" colspan="3">잔고</td>
                 <td id="btn_da"colspan="3">예수금</td>
                 <td id="btn_log" colspan="3">일지</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <td colspan="2">
                  <select name="account">
                    <option value="accounto">계좌번호</option>
                  <option value="accountt">계좌번호2</option>
                  </select>
                </td>
                <td colspan="2">이름</td>
                <td colspan="2">비밀번호</td>
                <td style="float: right;"><a href="#">조회</a></td>
               </tr>
               <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">순자산총액</td>
                <td colspan="3" style="background-color: white;">순자산총액 data</td>
                <td colspan="2">총평가금액</td>
                <td colspan="3" style="background-color: white;">총평가금액 data</td>
                <td colspan="2">총평가손익</td>
                <td colspan="3" style="background-color: white;">총평가손익 data</td>
                <td colspan="2">총수익률</td>
                <td colspan="3" style="background-color: white;">총수익률 data</td>
            </tr>
            <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">종목명</td>
                <td colspan="2">구분</td>
                <td colspan="2">보유량</td>
                <td colspan="2">주문가능</td>
                <td colspan="2">평균단가</td>
                <td colspan="2">현재가</td>
                <td colspan="2">매입금액</td>
                <td colspan="2">평가금액</td>
                <td colspan="2">평가손익</td>
                <td colspan="2">수익률</td>
            </tr>
               <tr style="width: 100%;">
                <td colspan="2">종목명 data</td>
                <td colspan="2">구분 data</td>
                <td colspan="2">보유량 data</td>
                <td colspan="2">주문가능 data</td>
                <td colspan="2">평균단가 data</td>
                <td colspan="2">현재가 data</td>
                <td colspan="2">매입금액 data</td>
                <td colspan="2">평가금액 data</td>
                <td colspan="2">평가손익 data</td>
                <td colspan="2">수익률 data</td>
          </tr>`
  },
  trading_da:()=>{
    return ` <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                 <td id="btn_mystock" colspan="3">관심</td>
                 <td id="btn_lead" colspan="3">주도업종</td>
                 <td id="btn_rank" colspan="3">순위</td>
                 <td id="btn_balance" colspan="3">잔고</td>
                 <td id="btn_da"colspan="3">예수금</td>
                 <td id="btn_log" colspan="3">일지</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <td colspan="2">
                  <select name="account">
                    <option value="accounto">계좌번호</option>
                  <option value="accountt">계좌번호2</option>
                  </select>
                </td>
                <td>이름</td>
                <td style="float: right;"><a href="#">조회</a></td>
               </tr>
            <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="2">구분</td>
                <td colspan="4">원화예수금</td>
                <td colspan="4">추정현금성자산</td>
                <td colspan="4">매매정산금</td>
                <td colspan="6">변제필요금액</td>
            </tr>
            <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                <td colspan="2">D+1일</td>
                <td colspan="4">원화예수금 data</td>
                <td colspan="4">추정현금성자산 data</td>
                <td colspan="4">매매정산금 data</td>
                <td colspan="3">당일 변제필요금액</td>
                <td colspan="3">당일 변제필요금액 data</td>
            </tr>
            <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                <td colspan="2">D+2일</td>
                <td colspan="4">원화예수금 data</td>
                <td colspan="4">추정현금성자산 data</td>
                <td colspan="4">매매정산금 data</td>
                <td colspan="3">익일 변제필요금액</td>
                <td colspan="3">익일 변제필요금액 data</td>
            </tr>
               <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center; background-color: #84A3E0;">
                <td colspan="8">현금</td>
                <td colspan="6">출금가능/대용</td>
                <td colspan="6">D+2신용/대출</td>
                <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                  <td colspan="4">현금성자산</td>
                  <td colspan="4">현금성자산 data</td>
                  <td colspan="3">출금가능금액</td>
                  <td colspan="3">출금가능금액 data</td>
                  <td colspan="3">융자총액</td>
                  <td colspan="3">융자총액 data</td>
                </tr>
                <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                  <td colspan="4">+예수금</td>
                  <td colspan="4">예수금 data</td>
                  <td colspan="3">대용총액</td>
                  <td colspan="3">대용총액 data</td>
                  <td colspan="3">담보유지비율</td>
                  <td colspan="3">담보유지비율 data</td>
                </tr>
                <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                  <td colspan="4">+CMA세후평가금액</td>
                  <td colspan="4">CMA세후평가금액 data</td>
                  <td colspan="6">미수없는금액</td>
                  <td colspan="6">미수금</td>
                </tr>
                <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                  <td colspan="4">+외화예수금</td>
                  <td colspan="4">외화예수금 data</td>
                  <td colspan="3">미수없는금액</td>
                  <td colspan="3">미수없는금액 data</td>
                  <td colspan="3">위탁/선물옵션미수금</td>
                  <td colspan="3">위탁/선물옵션미수금 data</td>
                </tr>
                <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                  <td colspan="4">-미수금및연체이자</td>
                  <td colspan="4">미수금및연체이자 data</td>
                  <td colspan="3">총주문가능금액(일반)</td>
                  <td colspan="3">총주문가능금액(일반) data</td>
                  <td colspan="3">미상환융자금</td>
                  <td colspan="3">미상환융자금 data</td>
                </tr>
                <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                  <td colspan="4">  비저축예수금</td>
                  <td colspan="4">비저축예수금 data</td>
                  <td colspan="3">현금주문가능금액</td>
                  <td colspan="3">현금주문가능금액 data</td>
                  <td colspan="3">이자미납금</td>
                  <td colspan="3">이자미납금 data</td>
                </tr>`
  },
  trading_log:()=>{
    return ` <tr id="click_event1" style="width: 100%; height: 30px; background-color: #B5C7EC">
                 <td id="btn_mystock" colspan="3">관심</td>
                 <td id="btn_lead" colspan="3">주도업종</td>
                 <td id="btn_rank" colspan="3">순위</td>
                 <td id="btn_balance" colspan="3">잔고</td>
                 <td id="btn_da"colspan="3">예수금</td>
                 <td id="btn_log" colspan="3">일지</td>
               </tr>
               <tr id="click_event2" style="width: 100%; height: 30px;">
                <td colspan="2">
                  <select name="account">
                    <option value="accounto">계좌번호</option>
                  <option value="accountt">계좌번호2</option>
                  </select>
                </td>
                <td>이름</td>
                <td>비밀번호</td>
                <td colspan="2">
                <input type="radio" name="day" value="당일">당일
                <input type="radio" name="period" value="기간별">기간별
                <td colspan="3"><input type="date"></td>
                <td style="float: right;"><a href="#">조회</a></td>
               </tr>
            <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                <td colspan="3" style=" background-color: #84A3E0;">금일 매수금액</td>
                <td colspan="4">금일 매수금액 data</td>
                <td colspan="3" style=" background-color: #84A3E0;">예수금총액</td>
                <td colspan="4">예수금총액 data</td>
                <td colspan="3" style=" background-color: #84A3E0;">총 매매금액</td>
                <td colspan="3">총 매매금액 data</td>
            </tr>
            <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                <td colspan="3" style=" background-color: #84A3E0;">금일 매도금액</td>
                <td colspan="4">금일 매도금액 data</td>
                <td colspan="3" style=" background-color: #84A3E0;">D+1정산금액</td>
                <td colspan="4">D+1정산금액 data</td>
                <td colspan="3" style=" background-color: #84A3E0;">총 손익금액</td>
                <td colspan="3">총 손익금액 data</td>
            </tr>
               <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                <td colspan="3" style=" background-color: #84A3E0;">금일 정산금액</td>
                <td colspan="4">금일 정산금액 data</td>
                <td colspan="3" style=" background-color: #84A3E0;">D+2정산금액</td>
                <td colspan="4">D+2정산금액 data</td>
                <td colspan="3" style=" background-color: #84A3E0;">총 수익률</td>
                <td colspan="3">총 수익률 data</td>
            </tr>
                <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                  <td colspan="2" style=" background-color: #84A3E0;">종목명</td>
                  <td colspan="3" style=" background-color: pink;">매수량</td>
                  <td colspan="3" style=" background-color: pink;">평균매입가</td>
                  <td colspan="3" style=" background-color: skyblue;">매도량</td>
                  <td colspan="3" style=" background-color: skyblue;">평균매도가</td>
                  <td colspan="2" style=" background-color: #84A3E0;">매매비용</td>
                  <td colspan="2" style=" background-color: #84A3E0;">손익금액</td>
                  <td colspan="2" style=" background-color: #84A3E0;">수익률</td>
                </tr>
                <tr border="1"; bordercolor="black";
                  style="width: 100%; height: 30px; text-align: center;">
                  <td colspan="2">종목명 data</td>
                  <td colspan="3">매수량 data</td>
                  <td colspan="3">평균매입가 data</td>
                  <td colspan="3">매도량 data</td>
                  <td colspan="3">평균매도가 data</td>
                  <td colspan="2">매매비용 data</td>
                  <td colspan="2">손익금액 data</td>
                  <td colspan="2">수익률 data</td>
                </tr>`
  },
  trading_time:()=>{
    return `  <tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0; ">
            <td colspan="3">시간대별</td>
            <td colspan="2">현재가</td>
            <td colspan="2">전일대비</td>
            <td colspan="2">등락률</td>
            <td colspan="2">체결량</td>
            <td colspan="3">거래량</td>
            <td colspan="2">체결강도</td>
            <td colspan="2">매도호가</td>
            <td colspan="2">매수호가</td>
          </tr>
          <tr>
            <td colspan="3">시간 data</td>            
            <td colspan="2">현재가 data</td>
            <td colspan="2">전일대비 data</td>
            <td colspan="2">등락률 data</td>
            <td colspan="2">체결량 data</td>
            <td colspan="3">거래량 data</td>
            <td colspan="2">체결강도 data</td>
            <td colspan="2">매도호가 data</td>
            <td colspan="2">매수호가 data</td>
          </tr>`
  },
  trading_day:()=>{
    return `  <tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0; ">
            <td colspan="2">일자별</td>
            <td colspan="2">종가</td>
            <td colspan="2">전일대비</td>
            <td colspan="2">등락률</td>
            <td colspan="2">거래량</td>
            <td colspan="2">거래대금</td>
            <td colspan="2">체결강도</td>
            <td colspan="2">시가</td>
            <td colspan="2">고가</td>
            <td colspan="2">저가</td>
          </tr>
          <tr>
            <td colspan="2">일자별 data</td>
            <td colspan="2">종가 data</td>
            <td colspan="2">전일대비 data</td>
            <td colspan="2">등락률 data</td>
            <td colspan="2">거래량 data</td>
            <td colspan="2">거래대금 data</td>
            <td colspan="2">체결강도 data</td>
            <td colspan="2">시가 data</td>
            <td colspan="2">고가 data</td>
            <td colspan="2">저가 data</td>
          </tr>`
  },
  trading_buy:()=>{
    return `  <tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="4">
                  <select name="account">
                    <option value="accounto">계좌번호</option>
                  <option value="accountt">계좌번호2</option>
                  </select>
                </td>
                <td colspan="2">이름</td>
                <td colspan="2">비밀번호</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="12" style="text-align: left;">매수희망가</td>
            <td colspan="3" style="background-color: pink">종목</td>
            <td colspan="5" style="background-color: pink">
              <select name="account">
                <option value="stockcode">주식코드1</option>
                <option value="stockcode">주식코드2</option>
              </select>
              <select name="account">
                <option value="stockname">주식이름</option>
              </select>
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="4" style="background-color: #84A3E0;">매수희망가</td>
            <td colspan="8">매수희망가 data</td>
            <td colspan="3" style="background-color: pink">구분</td>
            <td colspan="5" style="background-color: pink">
              <input type="radio" name="sprice" value="지정가">지정가
              <input type="radio" name="mprice" value="시장가">시장가
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="12" style="text-align: left;">매수가능금액 및 수량</td>
            <td colspan="3" style="background-color: pink">조건</td>
            <td colspan="5" style="background-color: pink">
              <input type="radio" name="noop" value="noop">없음
              <input type="radio" name="ioc" value="IOC">IOC
              <input type="radio" name="fok" value="FOK">FOK
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">최대매수금액</td>
            <td colspan="3">최대매수금액data</td>
            <td colspan="3" style="background-color: #84A3E0;">최대매수수량</td>
            <td colspan="3">최대매수수량data</td>
            <td colspan="3" style="background-color: pink">수량</td>
            <td colspan="5" style="background-color: pink"><input type="text">주</td>
            
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">미수없는금액</td>
            <td colspan="3">미수없는금액data</td>
            <td colspan="3" style="background-color: #84A3E0;">미수없는수량</td>
            <td colspan="3">미수없는수량data</td>
            <td colspan="3" style="background-color: pink">단가</td>
            <td colspan="5" style="background-color: pink"><input type="text">원</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="12" style="text-align: left;">매수 가능 금액 내용</td>
            <td colspan="3" style="background-color: pink">번호</td>
            <td colspan="5" style="background-color: pink"><input type="text">원</td>
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">총주문자산금액</td>
            <td colspan="3">총주문자산금액data</td>
            <td rowspan="2" colspan="3" style="background-color: #84A3E0;">현금주문자산금액</td>
            <td rowspan="2" colspan="3">현금주문자산금액data</td>
            <td colspan="3" style="background-color: pink">금액</td>
            <td colspan="5" style="background-color: pink"><input type="text">적용</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">가능수량계산단가</td>
            <td colspan="3">가능수량계산단가data</td>
            <td colspan="3" style="background-color: violet"><a id="btb_buycancle" href="#">전량취소</a></td>
            <td colspan="5" style="background-color: red"><a id="btn_buying" href="#">매수</a></td>
          </tr>`
  },
  trading_sell:()=>{
    return `<tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="4">
                  <select name="account">
                    <option value="accounto">계좌번호</option>
                  <option value="accountt">계좌번호2</option>
                  </select>
                </td>
                <td colspan="2">이름</td>
                <td colspan="2">비밀번호</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">총평가금액</td>
            <td colspan="3">총평가금액data</td>
            <td colspan="3" style="background-color: #84A3E0;">총평가손익</td>
            <td colspan="3">총평가손익data</td>
            <td colspan="3" style="background-color: skyblue">종목</td>
            <td colspan="5" style="background-color: skyblue">
              <select name="account">
                <option value="stockcode">주식코드1</option>
                <option value="stockcode">주식코드2</option>
              </select>
              <select name="account">
                <option value="stockname">주식이름</option>
              </select>
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="3" style="background-color: #84A3E0;">순자산총액</td>
            <td colspan="3">순자산총액data</td>
            <td colspan="3" style="background-color: #84A3E0;">총수익률</td>
            <td colspan="3">총수익률data</td>
            <td colspan="3" style="background-color: skyblue">구분</td>
            <td colspan="5" style="background-color: skyblue">
              <input type="radio" name="sprice" value="지정가">지정가
              <input type="radio" name="mprice" value="시장가">시장가
            </td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="2">종목명</td>
            <td colspan="2">보유량</td>
            <td colspan="2">주문가능</td>
            <td colspan="2">평균단가</td>
            <td colspan="2">평가손익</td>
            <td colspan="2">수익률</td>
            <td colspan="3" style="background-color: skyblue">조건</td>
            <td colspan="5" style="background-color: skyblue">
              <input type="radio" name="noop" value="noop">없음
              <input type="radio" name="ioc" value="IOC">IOC
              <input type="radio" name="fok" value="FOK">FOK
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">종목명</td>
            <td colspan="2">보유량 data</td>
            <td colspan="2">주문가능 data</td>
            <td colspan="2">평균단가 data</td>
            <td colspan="2">평가손익 data</td>
            <td colspan="2">수익률 data</td>
            <td colspan="3" style="background-color: skyblue">수량</td>
            <td colspan="5" style="background-color: skyblue"><input type="text">주</td>
            
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">종목명</td>
            <td colspan="2">보유량 data</td>
            <td colspan="2">주문가능 data</td>
            <td colspan="2">평균단가 data</td>
            <td colspan="2">평가손익 data</td>
            <td colspan="2">수익률 data</td>
            <td colspan="3" style="background-color: skyblue">단가</td>
            <td colspan="5" style="background-color: skyblue"><input type="text">원</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">종목명</td>
            <td colspan="2">보유량 data</td>
            <td colspan="2">주문가능 data</td>
            <td colspan="2">평균단가 data</td>
            <td colspan="2">평가손익 data</td>
            <td colspan="2">수익률 data</td>
            <td colspan="3" style="background-color: skyblue">번호</td>
            <td colspan="5" style="background-color: skyblue"><input type="text">원</td>
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">종목명</td>
            <td colspan="2">보유량 data</td>
            <td colspan="2">주문가능 data</td>
            <td colspan="2">평균단가 data</td>
            <td colspan="2">평가손익 data</td>
            <td colspan="2">수익률 data</td>
            <td colspan="3" style="background-color: skyblue">금액</td>
            <td colspan="5" style="background-color: skyblue"><input type="text">적용</td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">종목명</td>
            <td colspan="2">보유량 data</td>
            <td colspan="2">주문가능 data</td>
            <td colspan="2">평균단가 data</td>
            <td colspan="2">평가손익 data</td>
            <td colspan="2">수익률 data</td>
            <td colspan="3" style="background-color: violet"><a id="btb_sellcancle" href="#">전량취소</a></td>
            <td colspan="5" style="background-color: #2E9AFE;"><a id="btn_sell" href="#">매도</a></td>
          </tr>`
  },
  trading_correction:()=>{
    return `<tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="4">
                  <select name="account">
                    <option value="accounto">계좌번호</option>
                  <option value="accountt">계좌번호2</option>
                  </select>
                </td>
                <td colspan="2">이름</td>
                <td colspan="2">비밀번호</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="2">주문번호</td>
            <td colspan="2">종목명</td>
            <td colspan="2">매매구분</td>
            <td colspan="2">주문량</td>
            <td colspan="2">주문가</td>
            <td colspan="2">미체결</td>
            <td colspan="3" style="background-color: #D8F6CE;">종목</td>
            <td colspan="5" style="background-color: #D8F6CE;">
              <select name="account">
                <option value="stockcode">주식코드1</option>
                <option value="stockcode">주식코드2</option>
              </select>
              <select name="account">
                <option value="stockname">주식이름</option>
              </select>
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">주문번호 data</td>
            <td colspan="2">종목명 data</td>
            <td colspan="2">매매구분 data</td>
            <td colspan="2">주문량 data</td>
            <td colspan="2">주문가 data</td>
            <td colspan="2">미체결 data</td>
            <td colspan="3" style="background-color: #D8F6CE;">원번</td>
            <td colspan="5" style="background-color: #D8F6CE;"><input type="text"></td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">주문번호 data</td>
            <td colspan="2">종목명 data</td>
            <td colspan="2">매매구분 data</td>
            <td colspan="2">주문량 data</td>
            <td colspan="2">주문가 data</td>
            <td colspan="2">미체결 data</td>
            <td colspan="3" style="background-color: #D8F6CE;">수량</td>
            <td colspan="5" style="background-color: #D8F6CE;"><input type="text">
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">주문번호 data</td>
            <td colspan="2">종목명 data</td>
            <td colspan="2">매매구분 data</td>
            <td colspan="2">주문량 data</td>
            <td colspan="2">주문가 data</td>
            <td colspan="2">미체결 data</td>
            <td colspan="3" style="background-color: #D8F6CE;">단가</td>
            <td colspan="5" style="background-color: #D8F6CE;"><input type="text">원</td></td>
            
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">주문번호 data</td>
            <td colspan="2">종목명 data</td>
            <td colspan="2">매매구분 data</td>
            <td colspan="2">주문량 data</td>
            <td colspan="2">주문가 data</td>
            <td colspan="2">미체결 data</td>
            <td colspan="3" style="background-color: #D8F6CE;">번호</td>
            <td colspan="5" style="background-color: #D8F6CE;"><input type="text"></td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">주문번호 data</td>
            <td colspan="2">종목명 data</td>
            <td colspan="2">매매구분 data</td>
            <td colspan="2">주문량 data</td>
            <td colspan="2">주문가 data</td>
            <td colspan="2">미체결 data</td>
            <td colspan="8" style="background-color: #04B486; text-align: center;"><a id="btn_correction" href="#">정정</a></td>
          </tr>`
  },
  trading_cancle:()=>{
    return `<tr style=" height: 30px; background-color: #B5C7EC;">
            <td id="btn_time" colspan="3">시간별</td>
            <td id="btn_day" colspan="3">일자별</td>
            <td id="btn_buy" colspan="3">매수</td>
            <td id="btn_sell" colspan="3">매도</td>
            <td id="btn_correction" colspan="3">정정</td>
            <td id="btn_cancle" colspan="3">취소</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="3">
                  <select name="account">
                    <option value="accounto">계좌번호</option>
                  <option value="accountt">계좌번호2</option>
                  </select>
                </td>
                <td colspan="2">이름</td>
                <td colspan="2">비밀번호</td>
          </tr>
          <tr style="height: 30px; background-color: #84A3E0;">
            <td colspan="2">주문번호</td>
            <td colspan="2">종목명</td>
            <td colspan="2">매매구분</td>
            <td colspan="2">주문량</td>
            <td colspan="2">주문가</td>
            <td colspan="2">미체결</td>
            <td colspan="3" style="background-color: #ECCEF5;">종목</td>
            <td colspan="5" style="background-color: #ECCEF5;">
              <select name="account">
                <option value="stockcode">주식코드1</option>
                <option value="stockcode">주식코드2</option>
              </select>
              <select name="account">
                <option value="stockname">주식이름</option>
              </select>
            </td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">주문번호 data</td>
            <td colspan="2">종목명 data</td>
            <td colspan="2">매매구분 data</td>
            <td colspan="2">주문량 data</td>
            <td colspan="2">주문가 data</td>
            <td colspan="2">미체결 data</td>
            <td colspan="3" style="background-color: #ECCEF5;">원번</td>
            <td colspan="5" style="background-color: #ECCEF5;"><input type="text"></td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">주문번호 data</td>
            <td colspan="2">종목명 data</td>
            <td colspan="2">매매구분 data</td>
            <td colspan="2">주문량 data</td>
            <td colspan="2">주문가 data</td>
            <td colspan="2">미체결 data</td>
            <td colspan="3" style="background-color: #ECCEF5;">수량</td>
            <td colspan="5" style="background-color: #ECCEF5;"><input type="text">
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">주문번호 data</td>
            <td colspan="2">종목명 data</td>
            <td colspan="2">매매구분 data</td>
            <td colspan="2">주문량 data</td>
            <td colspan="2">주문가 data</td>
            <td colspan="2">미체결 data</td>
            <td colspan="3" style="background-color: #ECCEF5;">번호</td>
            <td colspan="5" style="background-color: #ECCEF5;"><input type="text"></td>
          </tr>
          <tr style="height: 30px;">
            <td colspan="2">주문번호 data</td>
            <td colspan="2">종목명 data</td>
            <td colspan="2">매매구분 data</td>
            <td colspan="2">주문량 data</td>
            <td colspan="2">주문가 data</td>
            <td colspan="2">미체결 data</td>
            <td colspan="8" style="background-color: #04B486;"><a id="btn_correction" href="#">취소</a></td>
          </tr>`
  }

};