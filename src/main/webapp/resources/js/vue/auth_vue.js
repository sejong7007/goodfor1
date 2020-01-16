"use strict";
var auth_vue = auth_vue || {}
auth_vue = {
	auth_body: x=>{
		return `<div id="s-header">
		
			<div class="topbar">
                <div class="topbar-left">
                    <a href="#" class="logo" id="btn_main">
                        <span>
                            GoodFor
                        </span>
                    </a>
                </div>
                <nav class="navbar-custom">
					
					
                    <ul class="list-unstyled topbar-right-menu float-right mb-0">
	                    <li class="nav-link dropdown-toggle arrow-none waves-light waves-effect">
							<div id="btn_trading" style="display:inline-block;width:200px;color:white;font-size:15px">계좌정보</div>
							<div id="btn_notice" style="display:inline-block;width:200px;color:white;font-size:15px">주식정보</div>
							<div id="btn_admin" style="display:inline-block;width:200px;color:white;font-size:15px">관리자</div>
						</li>
						
                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" href="#">
                                <i class="fi-bell noti-icon"></i>
                            </a>
                        </li>
                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fi-speech-bubble noti-icon"></i>
                            </a>
                        </li>
                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <span class="ml-1"> . . . . <i class="mdi mdi-chevron-down"></i> </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown" x-placement="bottom-end" style="position: absolute; transform: translate3d(130px, 70px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <!-- item-->
                                <div class="dropdown-item noti-title">
                                    <h6 class="text-overflow m-0">Welcome !</h6>
                                </div>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-head"></i> <span>My Account</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-cog"></i> <span>Settings</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-help"></i> <span>Support</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-lock"></i> <span>Lock Screen</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-power"></i> <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
		</div>
        <div id="body_main" style="margin-top: 70px;">
            <div id="body_img">
                <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMTZfNDMg/MDAxNTc5MTYzMDU4MDAw.T1osXaPOhX6xHl_9F3glquwMx_NbfkLyJkYglS6zPPkg.ZUrBV-d4elt-4V9JLGyBs4KcuQh9VhQ0xg0741Q2Ua8g.JPEG/AI-Image2.jpg?type=w740" alt="" style="margin-left: 30%; margin-right: 30%;">            
            </div>
            <div id="body_icon" style="margin-top: 3%; margin-left: 43%;">
                <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMTZfMjAz/MDAxNTc5MTQwOTY3OTE0.95-bo0_ntpxsrIeoIqWUoHT-TVUYs0YDlNDtLZ8z92Ug.wz3LUDP5Kd0t0ekbeuTzgicMqpwGplqC_knxJrr3FL8g.PNG/account2.png?type=w740" alt="" style="width: 100px;">
                <div style="display: inline-block; width: 30px;"></div>
                <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMTZfMTM5/MDAxNTc5MTQwOTY3NjMy.mZJis_aj0h2tU1VmFFoGZnj2Xo3N-oj7BI5ULU1NbdQg.l6pSBxTuVMfj4Z_eCCRL9ND1exLMYmYVFge1qmLTqv0g.PNG/mymoney2.png?type=w740" alt="" style="width: 100px;">
            </div>
			
		</div>
		<div id="s-footer" style="margin-top: 100px;">
			<h3 style="margin-left: 37%;">2019 - 2020 © Goodfor. - www.Goodfor.com</h3>
		</div>`
	}
	
};
