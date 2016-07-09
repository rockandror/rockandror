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

  def youtube_video_as_background(id, src, options = {})
    data_property = { videoURL: src, containment: 'body', autoPlay:true, mute:true, startAt:20, opacity:1, showControls: false, quality: 'highres', loop: true, align: 'center,center', showYTLogo: false}
    data_property = data_property.merge!(options) if options.any?
    content_tag :div, "", id: id, class: "player", "data-property": data_property.to_json
  end
  
end