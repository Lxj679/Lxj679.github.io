import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-Bwp4XzXn.js";const e={},p=t(`<h2 id="_1-for-循环遍历列表每个元素" tabindex="-1"><a class="header-anchor" href="#_1-for-循环遍历列表每个元素"><span>1. for 循环遍历列表每个元素</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>students_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;lilei&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hanmeimei&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;madongmei&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> student <span class="token keyword">in</span> students_list<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span>

<span class="token comment"># output</span>
lilei
hanmeimei
madongmei
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-遍历列表元素平方放回" tabindex="-1"><a class="header-anchor" href="#_2-遍历列表元素平方放回"><span>2. 遍历列表元素平方放回</span></a></h2><ol><li>操作如下列表</li></ol><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>平方放回</li></ol><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span>

position <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> num <span class="token keyword">in</span> lst<span class="token punctuation">:</span>
    lst<span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">=</span> num <span class="token operator">**</span> <span class="token number">2</span>
    position <span class="token operator">+=</span> <span class="token number">1</span>
    
<span class="token keyword">print</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","12.for.html.vue"]]),m=JSON.parse(`{"path":"/Notability/python/12.for.html","title":"12. for","lang":"zh-CN","frontmatter":{"title":"12. for","date":"2024-05-09T14:19:44.000Z","isOriginal":true,"category":["python"],"tag":["python","编程","教程"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"description":"1. for 循环遍历列表每个元素 2. 遍历列表元素平方放回 操作如下列表 平方放回","head":[["meta",{"property":"og:url","content":"https://dailyrecord4ryan.com/Notability/python/12.for.html"}],["meta",{"property":"og:site_name","content":"Website of Ryan"}],["meta",{"property":"og:title","content":"12. for"}],["meta",{"property":"og:description","content":"1. for 循环遍历列表每个元素 2. 遍历列表元素平方放回 操作如下列表 平方放回"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T07:44:56.000Z"}],["meta",{"property":"article:author","content":"Ryan"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"编程"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:published_time","content":"2024-05-09T14:19:44.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-09T07:44:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12. for\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-09T14:19:44.000Z\\",\\"dateModified\\":\\"2024-05-09T07:44:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan\\",\\"url\\":\\"https://dailyrecord4ryan.com\\"}]}"]]},"headers":[{"level":2,"title":"1. for 循环遍历列表每个元素","slug":"_1-for-循环遍历列表每个元素","link":"#_1-for-循环遍历列表每个元素","children":[]},{"level":2,"title":"2. 遍历列表元素平方放回","slug":"_2-遍历列表元素平方放回","link":"#_2-遍历列表元素平方放回","children":[]}],"git":{"createdTime":1715240696000,"updatedTime":1715240696000,"contributors":[{"name":"Lxj679","email":"2944170474@qq.com","commits":1}]},"readingTime":{"minutes":0.49,"words":147},"filePathRelative":"Notability/python/12.for.md","localizedDate":"2024年5月9日","excerpt":"<h2>1. for 循环遍历列表每个元素</h2>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code>students_list <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'lilei'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'hanmeimei'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'madongmei'</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token keyword\\">for</span> student <span class=\\"token keyword\\">in</span> students_list<span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>student<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># output</span>\\nlilei\\nhanmeimei\\nmadongmei\\n</code></pre></div>","autoDesc":true}`);export{d as comp,m as data};
