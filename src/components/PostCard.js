export const PostCard = ({
  imgUrl,
  slug,
  sortKey,
  title,
  categories,
  date,
  summary,
  content,
}) => {
  return `
  <article class="each_post_container">
    <div class="each_post_contents">
      <h1>
        <a href="/content?id=${slug}&type=${sortKey}">${title}</a>
      </h1>
      <div class="title_image" style="background-image:url(${imgUrl})"></div>
      <div class="each_post_profile">
        <img src="../../static/images/profile/selfie_japan.jpeg" alt="profile_image">
      <div class ="each_post_profile_detail">
        <span>Cloud Lee</span>
        <div>
          <div class="post_category_$wrapper">
            ${categories?.map((category) => `<span>${category}</span>`)}
          </div>
          <span class="each_post_profile_detail_date">${
            date?.split(' ')[0]
          }</span>
        </div>
      </div>
      </div>
      <div class="preview_content">
          ${summary ? summary : setPreview(JSON.parse(content))}
      </div>
    </div>
  </article>
  `;
};
