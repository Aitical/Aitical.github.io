---
layout: about 
---

<br/>




<!--# Bio

I obtained my Bachelor degree from Soochow University in 2020. Currently, I am a Ph.D. student at Harbin Institute of Technology, where I am under the supervision of Professor [Junjun Jiang][https://homepage.hit.edu.cn/jiangjunjun]. Mainly intrest in computer vision, especially in **Low-level Vision** and **Representation Learning**.

[Google Scholar](https://scholar.google.com/citations?&user=JSqb7QIAAAAJ) &nbsp;&nbsp;&nbsp;
[GitHub](https://github.com/Aitical) &nbsp;&nbsp;&nbsp;
[Email](mailto:gwu@hit.edu.cn)

-->



<style>
  a:hover {
    text-decoration: underline;
  }
 main,
 footer,
 .nav-container {
   display: block;
   margin: 0 auto;
   max-width: 800px;
   width: 80%;
 }  
</style>


<style>
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
    }
  }

  a:hover {
    animation: blink 1s forwards;
    /* color: red; */
    /* text-shadow: 0 0 4px yellow; */
  }
</style>


<div style="display: flex; padding-top:20px; padding-bottom:5px; flex-wrap: wrap;">


  <!-- Left Column -->

  <div style="flex: 1.35; width: 25%; padding: 0px; box-sizing: border-box; min-width:150px; padding-bottom:20px;" class="left-column">
    <img src="../assets/img/index/gang.png" alt="Left Image" style="max-width: 90%; height: auto; margin-bottom: 30px; box-shadow:1px 1px 5px 0px rgba(0,0,0,0.5);">
    <!-- <p style="text-align:left;"> -->
      <!-- <h1 style="margin-top:2px!important;">
        <name>Gang Wu (吴刚)</name>
      </h1>
    <p style="color: rgb(0, 102, 153); margin-top: 0px;">PhD student @ HIT </p> -->



  <div class="media">
    <a name="fsaf" class="pull-left"  style="padding-right:10px;">
      <img class="media-object" src="../assets/img/email.svg" width="20px" height="20px" style="margin-bottom:10px;">
    </a>
    <div class="media-body">
      <p class="media-heading"  style="color: rgb(118, 130, 150); font-size: 0.9em;">
        <strong style="color: rgb(90, 100, 120);">
          <a href="mailto:gwu@hit.edu.cn" style="color: rgb(90, 100, 120);" onmouseover="this.style.color='#006699';this.style.transition='color 0.3s ease'" onmouseout="this.style.color='#5A6478';">E-mail</a>
      </strong>
      </p>
    </div>
  </div>
<div class="media">
    <a name="fsaf" class="pull-left" style="padding-right:10px;">
      <img class="media-object" src="../assets/img/google_scholar.png" width="20px" height="20px" style="margin-bottom:10px;" />
    </a>
    <div class="media-body">
      <p class="media-heading" style="color: rgb(118, 130, 150); font-size: 0.9em;">
        <strong style="color: rgb(90, 100, 120);">
          <a href="https://scholar.google.com/citations?user=JSqb7QIAAAAJ" style="color: rgb(90, 100, 120);" onmouseover="this.style.color='#006699';this.style.transition='color 0.3s ease'" onmouseout="this.style.color='#5A6478';">Scholar</a>
      </strong>
      </p>
    </div>
  </div>

  <div class="media">
    <a name="fsaf" class="pull-left"  style="padding-right:10px;">
      <img class="media-object" src="../assets/img/github.svg" width="20px" height="20px" style="margin-bottom:10px;">
    </a>
    <div class="media-body">
      <p class="media-heading"  style="color: rgb(118, 130, 150); font-size: 0.9em;">
        <strong style="color: rgb(90, 100, 120);">
          Github
      </strong>
        <a href="https://github.com/Aitical" style="color: rgb(90, 100, 120);" onmouseover="this.style.color='#006699';this.style.transition='color 0.3s ease'" onmouseout="this.style.color='#5A6478';">@Aitical</a>
      </p>
    </div>
  </div>

  <div class="media">
  <a name="fsaf" class="pull-left"  style="padding-right:10px;">
    <img class="media-object" src="../assets/img/wechat.svg" width="20px" height="20px">
  </a>
  <div class="media-body">
    <p class="media-heading"  style="color: rgb(118, 130, 150); font-size: 0.9em;">
      <strong style="color: rgb(90, 100, 120);">
        Wechat
    </strong>
    <span onmouseover="showText('Feel free to contact me.')" onmouseout="hideText()">@w965813422</span>
    </p>
  </div>
</div>
  <!-- <style>
    /* 添加样式以使 tooltip 更美观 */
    span.tooltip {
      position: relative;
      cursor: pointer;
    }

    span.tooltip::after {
      content: attr(data-tooltip);
      position: absolute;
      background-color: #fff;
      color: #000;
      padding: 5px;
      border-radius: 5px;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    
    span.tooltip:hover::after {
      opacity: 1;
      visibility: visible;
      writing-mode: horizontal-tb;
    
    }
  </style>


  <p>悬停在 <span class="tooltip" data-tooltip="Feel free to content me.">这里</span> 显示新的文字。</p> -->

<!-- <span onmouseover="showText('Feel free to content me.')" onmouseout="hideText()">悬停在这里</span> -->

<div id="tooltip" style="display: none; position: absolute; background-color: #fff; border: 1px solid #ccc; padding: 5px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); border-radius: 8px; transition: opacity 0.s;"></div>

<script>
  function showText(text) {
    var tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = text;
    tooltip.style.display = 'block';
  }

  function hideText() {
    var tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
  }
</script>


  </div>


  <!-- Right Column -->
  <div style="flex: 3; width: 70%; padding: 20px; box-sizing: border-box; margin-left: auto; padding-left:50px; padding-top:0px;" class="right-column">
    <h1 style="margin-top:2px!important;">
        <name>Gang Wu （吴刚）</name>
    </h1>
    <p style="color: #0070c9; margin-top: 0px;">PhD student @ HIT</p>
    <p style="margin-bottom: 25px;"></p>
    <p style="margin: 0;">I obtained my Bachelor degree from Soochow University in 2020.   </p>
    <p>
        Currently, I am a Ph.D. student at Harbin Institute of Technology, where I am under the supervision of <a href="https://homepage.hit.edu.cn/jiangjunjun">Prof. Junjun Jiang</a>.  
    </p>
    <p>
        Mainly intrest in computer vision, especially in <i><b>Low-level Vision</b></i> and <i><b>Representation Learning</b></i>. 
    </p>
        <p style="margin-bottom:0px;">
        <!-- <a href="mailto:hchen794@connect.hkust-gz.edu.cn"> Email </a> &nbsp;/&nbsp; -->
        <!-- <a href="https://scholar.google.com/citations?&user=KWbcBucAAAAJ"> Google Scholar </a> &nbsp;/&nbsp; -->
        <!-- <a href="https://github.com/haoyuc"> GitHub </a>  -->
  </p>  
  </div>




</div>






<hr style="border-top: 1px solid #e3e3e3; margin-top: -5px ">
# News

<ul>
  <li><strong style="color: rgb(90, 100, 120);">2024-04</strong>: One first author paper was accepted in ICME 2024 (Oral).</li>
  <li><strong style="color: rgb(90, 100, 120);">2024-01</strong>: One first author paper was accepted in Machine Intelligence Research.</li>
    <li><strong style="color: rgb(90, 100, 120);">2024-01</strong>: One paper to appear in ICLR 2024 .</li>
  <li><strong style="color: rgb(90, 100, 120);">2023-12</strong>: One first author paper was accepted in AAAI 2024.</li>
  <li><strong style="color: rgb(90, 100, 120);">2023-05</strong>: One first author paper was accepted in IEEE Trans. Neural Networks Learn. Syst.</li>
  <li><strong style="color: rgb(90, 100, 120);">2023-04</strong>: One paper to appear in ICML 2023.</li>
  <li><strong style="color: rgb(90, 100, 120);">2023-04</strong>: One paper to appear in CVPRW 2022.</li>
</ul>



# Education

<!-- <div class="media">
	<a name="fsaf" class="pull-left", >
		<img class="media-object" src="../assets/img/index/hit.png" width="200px" height="80px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong  style="font-size: 15px;">
				 Harbin Institute of Technology
		 </strong><br>
     <span   style="font-size: 14px;">
			Ph.D. student, 2020 ~ present.
     </span>
		</p>
	</div>
</div> -->

<div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/index/HIT.png" width="200px" height="80px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong style="font-size: 15px;">
				 Harbin Institute of Technology
		 </strong><br>
     <span   style="font-size: 14px;">
			Ph.D. student, 2020 ~ present.
     </span>
		</p>
	</div>
</div>



<div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/index/soochow.png" width="150px" height="80px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong style="font-size: 15px;">
				 Soochow University
		 </strong><br>
     <span   style="font-size: 14px;">
			B.Eng., Major in Computer Science, Sep 2016 - Jul 2020.
     </span>
		</p>
	</div>
</div>


# Publications


<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>


<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/index/mm.png" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;"> Under Review </div>
      <div  class="paper-title">
        Harmony in Diversity: Improving All-in-One Image Restoration via Multi-Task Collaboration
      </div>
      <div class="author">
      <span class="author-me">Gang Wu</span>, Junjun Jiang, Kui Jiang, Xianming Liu
      </div>
​      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
​     <!-- <br> -->
<!-- ​      <a href="https://me.csgwu.site/MCLIR">[Project]</a>  -->
​      <a href="https://github.com/Aitical/Art">[Code]</a> and  <a href="">[Paper]</a>  are coming. 
<!-- ​      <a href="https://arxiv.org/abs/2309.06023">[Valse Poster]</a> -->

​      <!-- <a href="">[Code]</a> -->
​      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
​      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
​      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
​      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
​      <br>
<!-- <p>&#x1F525; <i>The extended journal version is under review.</i></p> -->
​      <!-- <p> 
​           
​      </p> -->
​    </td>
</tr>
<!-- =================================================================================== -->



<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/index/icme24.png" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">ICME, 2024 (Oral) </div>
      <div  class="paper-title">
        Exploiting Self-Supervised Constraints in Image Super-Resolution
      </div>
      <div class="author">
      <span class="author-me">Gang Wu</span>, Junjun Jiang, Kui Jiang, Xianming Liu
      </div>
​      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
​     <!-- <br> -->
<!-- ​      <a href="https://me.csgwu.site/MCLIR">[Project]</a>  -->
​      <a href="https://github.com/Aitical/SSCSR">[Code]</a> 
​      <a href="https://arxiv.org/abs/2404.00260">[Arxiv]</a>
<!-- ​      <a href="https://arxiv.org/abs/2309.06023">[Valse Poster]</a> -->

​      <!-- <a href="">[Code]</a> -->
​      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
​      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
​      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
​      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
​      <br>
<!-- <p>&#x1F525; <i>The extended journal version is under review.</i></p> -->
​      <!-- <p> 
​           
​      </p> -->
​    </td>
</tr>
<!-- =================================================================================== -->




<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/index/mclir.jpg" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">AAAI, 2024</div>
      <div  class="paper-title">
        Learning from History: Task-agnostic Model Contrastive Learning for Image Restoration
      </div>
      <div class="author">
      <span class="author-me">Gang Wu</span>, Junjun Jiang, Kui Jiang, Xianming Liu
      </div>
​      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
​     <!-- <br> -->
​      <a href="https://me.csgwu.site/MCLIR">[Project]</a> 
​      <a href="https://github.com/Aitical/MCLIR">[Code]</a> 
​      <a href="https://arxiv.org/abs/2309.06023">[Arxiv]</a>
<!-- ​      <a href="https://arxiv.org/abs/2309.06023">[Valse Poster]</a> -->

​      <!-- <a href="">[Code]</a> -->
​      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
​      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
​      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
​      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
​      <br>
<p>&#x1F525; <i>The extended journal version is under review.</i></p>
​      <!-- <p> 
​          We propose a novel machine learning problem – the SRP problem as reconstructing high-quality data from unsatisfactory sensor data in industrial systems. 
​      </p> -->
​    </td>
</tr>
<!-- =================================================================================== -->



<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/index/scnet.png" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">Machine Intelligence Research, 2024</div>
      <div  class="paper-title">
        Fully 1×1 Convolutional Network for Lightweight Image Super-Resolution
      </div>
      <div class="author">
      <span class="author-me">Gang Wu</span>, Junjun Jiang, Kui Jiang, Xianming Liu
      </div>
​      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
​     <!-- <br> -->
<!-- ​      <a href="https://github.com/Aitical/SCNet">[Project]</a>  -->
​      <a href="https://github.com/Aitical/SCNet">[Code]</a> 
​      <a href="https://arxiv.org/abs/2307.16140">[Arxiv]</a>
<!-- ​      <a href="https://arxiv.org/abs/2309.06023">[Valse Poster]</a> -->

​      <!-- <a href="">[Code]</a> -->
​      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
​      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
​      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
​      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
​      <br>
<!-- <p>&#x1F525; <i>The extended journal version is under review.</i></p> -->
​      <!-- <p> 
​           
​      </p> -->
​    </td>
</tr>
<!-- =================================================================================== -->


<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/index/pcl.png" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">IEEE Trans. Neural Networks Learn. Syst., 2023</div>
      <div  class="paper-title">
        A Practical Contrastive Learning Framework for Single-Image Super-Resolution
      </div>
      <div class="author">
      <span class="author-me">Gang Wu</span>, Junjun Jiang, Junpeng Jiang, Xianming Liu
      </div>
​      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
​     <!-- <br> -->
<!-- ​      <a href="https://github.com/Aitical/SCNet">[Project]</a>  -->
​      <a href="https://github.com/Aitical/PCL-SISR">[Code]</a> 
​     <a href="https://arxiv.org/abs/2401.05633">[Arxiv]</a>
<!-- ​      <a href="https://arxiv.org/abs/2309.06023">[Valse Poster]</a> -->

​      <!-- <a href="">[Code]</a> -->
​      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
​      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
​      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
​      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
​      <br>
<!-- <p>&#x1F525; <i>The extended journal version is under review.</i></p> -->
​      <!-- <p> 
​           
​      </p> -->
​    </td>
</tr>
<!-- =================================================================================== -->




<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/index/iclr.png" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">ICLR 2024</div>
      <div  class="paper-title">
        Zero-Mean Regularized Spectral Contrastive Learning: Implicitly Mitigating Wrong Connections in Positive-Pair Graphs
      </div>
      <div class="author">
      Xiong Zhou, Xianming Liu, Feilong Zhang, <span class="author-me">Gang Wu</span>,  Deming Zhai, Junjun Jiang, Xiangyang Ji
      </div>
​      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
​     <!-- <br> -->
<!-- ​      <a href="https://github.com/Aitical/SCNet">[Project]</a>  -->
​      <a href="https://openreview.net/attachment?id=RZBy8oHTz4&name=supplementary_material">[Code]</a> 
​      <a href="https://openreview.net/pdf?id=RZBy8oHTz4">[Paper]</a>
<!-- ​      <a href="https://arxiv.org/abs/2309.06023">[Valse Poster]</a> -->

​      <!-- <a href="">[Code]</a> -->
​      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
​      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
​      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
​      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
​      <br>
<!-- <p>&#x1F525; <i>The extended journal version is under review.</i></p> -->
​      <!-- <p> 
​           
​      </p> -->
​    </td>
</tr>
<!-- =================================================================================== -->


<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/index/icml.png" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">ICML 2023</div>
      <div  class="paper-title">
        No one idles: Efficient heterogeneous federated learning with parallel edge and server computation
      </div>
      <div class="author">
      Feilong Zhang, Xianming Liu, Shiyi Lin, <span class="author-me">Gang Wu</span>, Xiong Zhou, Junjun Jiang, Xiangyang Ji
       Junjun Jiang, Xianming Liu
      </div>
​      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
​     <!-- <br> -->
<!-- ​      <a href="https://github.com/Aitical/SCNet">[Project]</a>  -->
​      <a href="https://github.com/Aitical/CFSR">[Code]</a> 
<a href="https://proceedings.mlr.press/v202/zhang23aa/zhang23aa.pdf">[Paper]</a>
​      
<!-- ​      <a href="https://arxiv.org/abs/2309.06023">[Valse Poster]</a> -->

​      <!-- <a href="">[Code]</a> -->
​      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
​      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
​      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
​      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
​      <br>
<!-- <p>&#x1F525; <i>The extended journal version is under review.</i></p> -->
​      <!-- <p> 
​           
​      </p> -->
​    </td>
</tr>
<!-- =================================================================================== -->



<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/index/tcsr.png" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">Arxiv</div>
      <div  class="paper-title">
        Incorporating transformer designs into convolutions for lightweight image super-resolution
      </div>
      <div class="author">
      <span class="author-me">Gang Wu</span>, Junjun Jiang, Yuanchao Bai, Xianming Liu
      </div>
​      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
​     <!-- <br> -->
<!-- ​      <a href="https://github.com/Aitical/SCNet">[Project]</a>  -->
​      <a href="https://github.com/Aitical/TCSR">[Code]</a> 
​      <a href="https://arxiv.org/abs/2303.14324">[Arxiv]</a>
<!-- ​      <a href="https://arxiv.org/abs/2309.06023">[Valse Poster]</a> -->

​      <!-- <a href="">[Code]</a> -->
​      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
​      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
​      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
​      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
​      <br>
<!-- <p>&#x1F525; <i>The extended journal version is under review.</i></p> -->
​      <!-- <p> 
​           
​      </p> -->
​    </td>
</tr>
<!-- =================================================================================== -->


<!-- =================================================================================== -->
  <tr>
    <td style="margin:5px;padding:5px;width:30%;max-width:30%" align="center" class="image-wrapper">
      <img style="margin:5px;padding-right:20px;width:100%;max-width:100%;" src="../assets/img/index/cfsr.png" alt="">
    </td>
    <td width="75%" valign="center" class="text-wrapper"> 
      <div style="color: rgb(118, 130, 150); font-size: 0.9em; line-height: 1.3;">Arxiv</div>
      <div  class="paper-title">
        Transforming Image Super-Resolution: A ConvFormer-based Efficient Approach
      </div>
      <div class="author">
      <span class="author-me">Gang Wu</span>, Junjun Jiang, Junpeng Jiang, Xianming Liu
      </div>
​      <!-- <em>ACM Multimedia <strong>(ACM MM)</strong></em>, 2023 -->
​     <!-- <br> -->
<!-- ​      <a href="https://github.com/Aitical/SCNet">[Project]</a>  -->
​      <a href="https://github.com/Aitical/CFSR">[Code]</a> 
​      <a href="https://arxiv.org/abs/2401.05633">[Arxiv]</a>
<!-- ​      <a href="https://arxiv.org/abs/2309.06023">[Valse Poster]</a> -->

​      <!-- <a href="">[Code]</a> -->
​      <!-- <a href="https://paperswithcode.com/dataset/pipal-perceptual-iqa-dataset">[Benchmark]</a>  -->
​      <!-- <a href="https://www.jasongt.com/research-full">[CVPR 2022 NTIRE Challenge]</a>  -->
​      <!-- <a href="https://www.youtube.com/watch?v=315Umwgpa6s">[Youtube]</a>  -->
​      <!-- <a href="https://www.bilibili.com/video/BV1cr4y1P7s4">[Bilibili]</a>  -->
​      <br>
<!-- <p>&#x1F525; <i>The extended journal version is under review.</i></p> -->
​      <!-- <p> 
​           
​      </p> -->
​    </td>
</tr>
<!-- =================================================================================== -->









    </tbody>
</table>

<p style="padding:6px;"> </p>



<!-- <br> -->

# Experience 

<p style="margin-bottom: 20px;"></p>

<div class="media">
	<a name="fsaf" class="pull-left">
		<img class="media-object" src="../assets/img/index/megvii.png" width="150px" height="48px">
	</a>
	<div class="media-body">
		<p class="media-heading">
			<strong>
				MEGVII
		 </strong><br>
     <span   style="font-size: 14px;">
			2022.4 ~ 2022.10. Research Intern. 
     </span>
		</p>
	</div>
</div>






# Academic Service & Awards

**Competition Awards**   
<p style="margin-bottom: 2px;"></p>

<div class="small-text">
ICRA 2023 RoboDepth Challenge, <span class="s1">3rd place</span> in Track 1 and <span class="s1"> Innovative Prize </span> in Track 2.  <br> 
NTIRE 2022 Image Inpainting Challenge, <span class="s1">2nd place</span> in Track 1.
</div>

<p class="whiteline"></p>

**Reviewer**  
<p style="margin-bottom: 2px;"></p>

<div class="small-text">
The International Conference on Learning Representations <span class="s1">(ICLR)</span> <br>
The International Joint Conference on Artificial Intelligence <span class="s1">(IJCAI)</span> <br>
The International Conference on Machine Learning <span class="s1">(ICML)</span> <br>
ACM Multimedia <span class="s1">(ACM MM)</span> <br>

IEEE International Conference on Acoustics, Speech, and Signal Processing <span class="s1">(ICASSP)</span>  <br>
IEEE International Conference on Multimedia and Expo <span class="s1">(ICME)</span> <br>


IEEE Transactions on Neural Networks and Learning Systems     <br>
IEEE Transactions on Circuits and Systems for Video Technology     <br>
IEEE Transactions on Multimedia     <br>
IEEE Transactions on Image Processing  <br>
Information Fusion <br>
</div>

