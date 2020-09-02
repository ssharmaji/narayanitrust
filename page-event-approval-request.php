<?php
/* Template Name: Event Approval */

get_header();

global $current_user, $wp;
$user = wp_get_current_user();
if(!is_user_logged_in() && !in_array( 'customer', (array) $user->roles )){
	wp_redirect(home_url());
	exit();
}

$user_id = $current_user->ID;

?>
<main>
	<section class="wrap-landlord-approve">
		<div class="custom-container flex">
			<div class="left-menu">
				<?php get_template_part( 'page-templates/sidebar-menu'); ?>
			</div>
			<div class="approve-request">
				<h1><?php _e("Event Approval Requests", "blace-theme"); ?></h1>
				<div class="request-table">
					<table cellpadding="0" cellspacing="0">
				
						<?php 
						$args = array(
							"post_type"      => "space",
							"posts_per_page" => -1,
							"post_status"    => "publish",
							"author"         => get_current_user_id()
						);

						$my_spaces = get_posts($args);
						$my_space_ids = array_column($my_spaces, "ID");

						// echo get_current_user_id();print_r($my_space_ids);

						$args = array(
							"post_type"      => "space_bookings",
							"posts_per_page" => -1,
							"post_status"    => "publish",
							"meta_query"     => array(
								"relation" => "AND",
								array(
									'key'     => 'space_id',
									'value'   => $my_space_ids,
									'compare' => 'IN',
								),
								array(
									'key'       => 'booking_status',
									'value'     => array("event_request"),
									'compare'   => 'IN',
								)
							)
							
						);

						$loop = new WP_Query($args);

						 ///echo "<pre>loop: ". print_r($loop, true); die;

						if($loop->have_posts()) {
							echo '<thead><tr><th>Property</th><th>Event Name</th><th>Date</th><th>Time</th><th>Accept or Reject</th></tr></thead><tbody>';
							while($loop->have_posts()) : $loop->the_post();
								$space_id = get_field("space_id");
								$event_id = get_field("event_id");

								// echo "<p>Post Status1: ". get_field("booking_status", get_the_ID())."</p>";
						?>
								<tr class="first-row">
										<td><a href='<?php echo get_permalink( $space_id ); ?>' title='<?php echo get_the_title($space_id); ?>'><?php echo get_the_title($space_id); ?></a></td>
										<td><a href='#' title='<?php echo get_the_title($event_id); ?>'><?php echo get_the_title($event_id); ?></a></td>
										<td><?php echo date("M d", strtotime(get_field("start_date", $event_id))) ." - ". date("d Y", strtotime(get_field("end_date", $event_id))); ?></td>
										<td><?php echo date("H:i A", strtotime(get_field("start_date", $event_id))); ?></td>
										<td>
											<form class="event_request" method="post" action="<?php echo home_url(add_query_arg(array(), $wp->request)); ?>">
												<?php wp_nonce_field( "event_request", "event_request_nonce", true, true ); ?>
												<input type="hidden" name="event_id" value="<?php echo $event_id; ?>">
												<input type="hidden" name="space_id" value="<?php echo $space_id; ?>">
												<input type="hidden" name="booking_id" value="<?php echo the_ID(); ?>">
												<button class="event_request approve_request" name="approve_request">Accept</button>
												<button class="event_request reject_request" name="reject_request">Reject</button>
											</form>
										</td>
								</tr>
						<?php 

							endwhile;
							echo '<tbody>';
						}else{
							echo "<tr><td class='nospace' colspan='5'><p>You do not have any booking request!</p></td></tr>";
						}
						?>
					</table>
					
					<div class="request-table-dropdown flex space-between">
						<div class="request-drop accepted-dropdown">
							<span>Accepted Events <i class="fa fa-chevron-down"></i></span>
							<div class="fadin-dropdown">
								<?php
								$args = array(
									"post_type"      => "space_bookings",
									"posts_per_page" => -1,
									"post_status"    => "publish",
									"meta_query"     => array(
										"relation" => "AND",
										array(
											'key'     => 'space_id',
											'value'   => $my_space_ids,
											'compare' => 'IN',
										),
										array(
											'key'     => 'booking_status',
											'value'   => array("event_accepted"),
											'compare' => 'IN',
										)
									)									
								);

								$loop = new WP_Query($args);

								// echo "<pre>loop: ". print_r($loop, true); die;

								if($loop->have_posts()) {
									echo '<ul class="flex flex-direction">';
									while($loop->have_posts()) : $loop->the_post();
										$space_id = get_field("space_id");
										$event_id = get_field("event_id");

									?>
										<li class="flex space-between items-align-center">
											<div class="left-event">
												<strong><a href='<?php echo get_permalink( $space_id ); ?>' title='<?php echo get_the_title($space_id);?>'><?php echo get_the_title($space_id); ?></a></strong>
												<p><a href='<?php echo get_permalink( $event_id ); ?>' title='<?php echo get_the_title($event_id); ?>'><?php echo get_the_title($event_id); ?></a></p>
												<p>Date: <?php echo date("M d", strtotime(get_field("start_date", $event_id))) ." - ". date("d Y", strtotime(get_field("end_date", $event_id))); ?> <span><?php echo date("H:i A", strtotime(get_field("start_date", $event_id))); ?></span></p>
											</div>
											<div class="right-event">
												<span>ACCEPTED</span>
											</div>
										</li>
									<?php
									endwhile;
									echo '</ul>';
								}else{
									echo "<p>List is empty</p>";
								}
								?>
							</div>
						</div>
						<div class="request-drop rejected-dropdown">
							<span>Rejected Events <i class="fa fa-chevron-down"></i></span>
							<div class="fadin-dropdown">
								<?php
								$args = array(
									"post_type"      => "space_bookings",
									"posts_per_page" => -1,
									"post_status" => "publish",
									"meta_query" => array(
										"relation" => "AND",
										array(
											'key'     => 'space_id',
											'value'   => $my_space_ids,
											'compare' => 'IN',
										),
										array(
											'key'       => 'booking_status',
											'value'     => array("event_rejected"),
											'compare'   => 'IN',
										)
									)									
								);

								$loop = new WP_Query($args);

								if($loop->have_posts()) {
									echo '<ul class="flex flex-direction">';
									while($loop->have_posts()) : $loop->the_post();
									$space_id = get_field("space_id");
									$event_id = get_field("event_id");

								?>
									<li class="flex space-between items-align-center">
										<div class="left-event">
											<strong><a href='<?php echo get_permalink( $space_id ); ?>' title='<?php echo get_the_title($space_id);?>'><?php echo get_the_title($space_id); ?></a></strong>
											<p><a href='<?php echo get_permalink( $event_id ); ?>' title='<?php echo get_the_title($event_id); ?>'><?php echo get_the_title($event_id); ?></a></p>
											<p>Date: <?php echo date("M d", strtotime(get_field("start_date", $event_id))) ." - ". date("d Y", strtotime(get_field("end_date", $event_id))); ?> <span><?php echo date("H:i A", strtotime(get_field("start_date", $event_id))); ?></span></p>
										</div>
										<div class="right-event">
											<span>REJECTED</span>
										</div>
									</li>
									<?php
									endwhile;
									echo '</ul>';
								}else{
									echo "<p>List is empty</p>";
								}
								?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- <script type="text/javascript">
	jQuery(document).ready(function(){
		jQuery(".event_request").click(function(){
			var ele = jQuery(this);
			var action = (jQuery(this).is(".approve_request")) ? "approve_request" : "reject_request";
			var booking_id = jQuery(this).sibling("")
			jQuery.ajax({
				type: 'POST',
				url: spaceajax.ajaxurl,
				data: {
					"booking_id": booking_id,
					'action'    : action
				},
				success: function(result) {

				}
			});
		});
	});
</script> -->
<?php get_footer(); ?>
