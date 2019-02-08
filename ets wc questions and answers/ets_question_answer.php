<?php
/**
Plugin Name: WooCommerce Product Question And Answer By ETS
Plugin URI:  https://www.expresstechsoftwares.com/
Description: <code><strong>ets WooCommerce Questions And Answers</strong></code> offers a rapid way to manage dynamic discussions about the products of your shop. <a href="https://www.expresstechsoftwares.com">Get more plugins for your e-commerce shop on <strong>ETS</strong></a>.
Version: 1.0.0  
Author: ExpressTech Software Solutions Pvt. Ltd.
Author URI: https://www.expresstechsoftwares.com/
*/   
/*
*
*
*/
if ( ! defined( 'ABSPATH' ) ) exit; 

define('ETS_WOO_QA_PATH', plugin_dir_url( __FILE__ ));

class ETS_WOO_PRODUCT_QUESTION_ANSWER {
	public function __construct() { 
		require ( 'includes/ets_admin_qa_function.php' );
		require( 'includes/ets_user_qa_function.php' );
	 		
	}  
} 
$etsWooProductQuestionAnswer = new ETS_WOO_PRODUCT_QUESTION_ANSWER(); 
?> 
