package com.goodfor.web.ctx;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@ComponentScan(basePackages = { "com.goodfor.web" })
@Import({})
public class RootContext {

}