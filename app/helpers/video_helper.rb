module VideoHelper

  def video_player(id, video_src_name, poster_src)
    rempte_url = 
    autoplay = true
    if browser.device.mobile?
      autoplay = false
    end
    video_tag([ static_content_url("#{video_src_name}.mp4"),
                static_content_url("#{video_src_name}.ogv"),
                static_content_url("#{video_src_name}.webm"),
                static_content_url("#{video_src_name}.m4v")],
                poster: static_content_url(poster_src),
                autobuffer: true,
                autoplay: autoplay,
                loop:loop,
                class: "img-responsive",
                id: id)
  end

end