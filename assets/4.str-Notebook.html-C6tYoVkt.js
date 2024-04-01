import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as r,b as n,e as u,w as a,a as p,d as s}from"./app-iJiD1WAq.js";const d="/assets/a4034a755a9502dce168bbee003b2cc-Cg6aEPGn.png",k="/assets/image-20240330103546007-6h6a9PZ2.png",v="/assets/335f4c5bd1b8f0691d46b6f2264a080-BKJBV_kA.png",m="/assets/022b9d9a5bd65c1c506370fb1ddcf56-M6v53vR_.png",b={},g=p('<h2 id="_1-字符串的定义" tabindex="-1"><a class="header-anchor" href="#_1-字符串的定义"><span>1. 字符串的定义</span></a></h2><p>字符串是由字母、数字和特殊字符来组成的序列</p><figure><img src="'+d+`" alt="a4034a755a9502dce168bbee003b2cc" tabindex="0" loading="lazy"><figcaption>a4034a755a9502dce168bbee003b2cc</figcaption></figure><h2 id="_2-创建字符串" tabindex="-1"><a class="header-anchor" href="#_2-创建字符串"><span>2. 创建字符串</span></a></h2><p>如何创建字符串？</p><p>————使用 <strong><span style="color:orange;"> 单引号、双引号</span></strong> 或者 <strong><span style="color:orange;"> 三引号</span></strong> 。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&#39;ryan&#39;</span>
number <span class="token operator">=</span> <span class="token string">&#39;8&#39;</span>
paragraph <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;hello, ryan.
nice to meet u&#39;&#39;&#39;</span>
paragraph_two  <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;Hi, ryan
nice to meet u 2&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么Python同时支持三种创建字符串的方法</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;I am Ryan&#39;</span> <span class="token comment"># 在英文中的常规表达式</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是英文当中可以缩写如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;I&#39;</span>m Ryan<span class="token punctuation">.</span>&#39; <span class="token comment"># 在英文中的也可以如此缩写</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
  File <span class="token string">&quot;C:\\Users\\Administrator\\PycharmProjects\\Coder\\Python\\code4.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">11</span>
    string <span class="token operator">=</span> <span class="token string">&#39;I&#39;</span>m Ryan<span class="token punctuation">.</span>&#39; <span class="token comment"># 在英文中的也可以如此缩写</span>
                <span class="token operator">^</span>
SyntaxError<span class="token punctuation">:</span> invalid syntax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为，开头是单引号，所以Python会寻找到下一个第一次出现的单引号进行匹配。而第一个单引号在字符串的末尾，所以导致整个字符串异常。（完全没有博爱过字符串全部内容）</p><p>如何解决上面描述的问题呢？——使用双引号。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;I&#39;m Ryan.&quot;</span> <span class="token comment"># 外面使用双引号包裹即可</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
I&#39;m Ryan<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),h=p(`<p>有时候我们需要字符串里面有单引号或双引号，此时发挥作用：**<span style="color:orange;">单双引号混用，是第一个原因</span>**那么三引号呢？ 假设我们现在需要存储如下文本：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>放入字符串，我们如何在Python代码实现呢？</p>`,3),y=n("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("string1 "),n("span",{class:"token operator"},"="),s(` '我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西'
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("string1"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"#output"),s(`
  File `),n("span",{class:"token string"},'"C:\\Users\\Administrator\\PycharmProjects\\Coder\\Python\\code4.py"'),n("span",{class:"token punctuation"},","),s(" line "),n("span",{class:"token number"},"26"),s(`
    string1 `),n("span",{class:"token operator"},"="),s(` '我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
                                                                                                                                `),n("span",{class:"token operator"},"^"),s(`
SyntaxError`),n("span",{class:"token punctuation"},":"),s(" EOL "),n("span",{class:"token keyword"},"while"),s(` scanning string literal
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-python line-numbers-mode","data-ext":"py","data-title":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("string1 "),n("span",{class:"token operator"},"="),s(` "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("string1"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"#output"),s(`
  File `),n("span",{class:"token string"},'"C:\\Users\\Administrator\\PycharmProjects\\Coder\\Python\\code4.py"'),n("span",{class:"token punctuation"},","),s(" line "),n("span",{class:"token number"},"26"),s(`
    string1 `),n("span",{class:"token operator"},"="),s(` "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
                                                                                                                                `),n("span",{class:"token operator"},"^"),s(`
SyntaxError`),n("span",{class:"token punctuation"},":"),s(" EOL "),n("span",{class:"token keyword"},"while"),s(` scanning string literal
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("li",null,[n("p",null,"由此可见，如果直接使用单引号或者双引号会出现报错，当然我们可以在每一行包括无文本的空行的后面加上‘\\’（此效果会将所有行拼接在一起）")],-1),q=p(`<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string1 <span class="token operator">=</span> &#39;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创\\
\\
浅者见浅，深者见深——黄家宝\\
\\
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\\
\\
先实现功能，再去优化，否则一切会很乱。——AI悦创\\
\\
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&#39;<span class="token comment">#引号这行不用加反斜杠</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string1<span class="token punctuation">)</span>

<span class="token comment"># output</span>
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常，我们还可以使用三引号测试：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string1 <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&#39;&#39;&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string1<span class="token punctuation">)</span>
<span class="token comment"># output </span>

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以从上面的输出可知，原本什么格式，输出就是什么格式。（原样输出）（三个双引号的效果也是一样的）</p><ul><li><p><strong><span style="color:orange;">三个单引号或者双引号，实现原样输出。</span></strong></p></li><li><p><strong><span style="color:orange;"> 多行注释 </span></strong></p></li><li><p><strong><span style="color:orange;">单双三引号混用</span></strong>（代码略）</p></li></ul><figure><img src="`+k+`" alt="多行注释的方法" tabindex="0" loading="lazy"><figcaption>多行注释的方法</figcaption></figure><h2 id="_3-字符串长度" tabindex="-1"><a class="header-anchor" href="#_3-字符串长度"><span>3. 字符串长度</span></a></h2><p>如何获取一个字符串的长度呢？————使用<code>len()</code></p><p><code>len()</code>：返回字符串中字符长度或者字符数。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>paragraph <span class="token operator">=</span> <span class="token string">&#39;Hello, ryan.&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>paragraph<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用len获取字符串长度时，是从数字1开始数的。</p><h2 id="_4-字符串中的字符获取" tabindex="-1"><a class="header-anchor" href="#_4-字符串中的字符获取"><span>4. 字符串中的字符获取</span></a></h2><h3 id="_4-1-获取单个字符" tabindex="-1"><a class="header-anchor" href="#_4-1-获取单个字符"><span>4.1 获取单个字符</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;dailyrecord4ryan&#39;</span>
<span class="token comment"># 获取字符 d</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 y</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># n (使用三种方法实现）</span>
select1 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span>
select2 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
select3 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select1<span class="token punctuation">,</span> select2<span class="token punctuation">,</span> select3<span class="token punctuation">)</span>

<span class="token comment"># output</span>

d
y
n n n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-获取多个连续字符-子字符串" tabindex="-1"><a class="header-anchor" href="#_4-2-获取多个连续字符-子字符串"><span>4.2 获取多个连续字符（子字符串）</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;dailyrecord4ryan&#39;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;

语法：string = &#39;dailyrecord4ryan&#39;
     select = string[start: end]
     PS: end 记得 +1
&quot;&quot;&quot;</span>

<span class="token comment"># 获取字符 daily</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token comment"># dail</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token comment"># daily</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 record</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取ryan</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">:</span><span class="token number">16</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># output</span>
daily
record
ryan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-获取多个不连续的字符" tabindex="-1"><a class="header-anchor" href="#_4-3-获取多个不连续的字符"><span>4.3 获取多个不连续的字符</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;0123456789&#39;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
语法：string = &#39;0123456789&#39;
select = string[start: end: sep]
PS: end 记得 +1 
&quot;&quot;&quot;</span>

<span class="token comment"># 获取字符 02468</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 13579</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>


string1 <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
<span class="token comment"># 提取 bnri</span>
select <span class="token operator">=</span> string1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>string1<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 ofts</span>
select <span class="token operator">=</span> string1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>string1<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">02468</span>
<span class="token number">13579</span>
bnri
ofts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-优化" tabindex="-1"><a class="header-anchor" href="#_4-4-优化"><span>4.4 优化</span></a></h3><p>如果我们要提取的字符是从字符从开头到结尾，则我们可以省略开头和结尾，留空即可。</p><p>所以4.3小节的代码可以等价于如下代码：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;0123456789&#39;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;

语法：string = &quot;0123456789&quot;
select = string[::sep]
PS: end 记得 +1

&quot;&quot;&quot;</span>

select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment"># 取偶数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment"># 取奇数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>


string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>

select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment"># 提取 bnri</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment"># 提取 ofts</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-字符串的倒序" tabindex="-1"><a class="header-anchor" href="#_4-5-字符串的倒序"><span>4.5 字符串的倒序</span></a></h3><h3 id="_4-5-1-实现" tabindex="-1"><a class="header-anchor" href="#_4-5-1-实现"><span>4.5.1 实现</span></a></h3><p>字符串的第三个位置，控制的是字符提取的方向。默认为正数1，如果我们想把字符串进行反转操作，我们可以改成-1，则我们可以将字符串从倒序第一的位置（-1）进行反方向输出</p><p>::: tips</p><p>正负控制方向，数字大小控制步长。</p><p>:::</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
reverse <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>reverse<span class="token punctuation">)</span>

<span class="token comment"># output</span>
sihtrofnrob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-2-存" tabindex="-1"><a class="header-anchor" href="#_4-5-2-存"><span>4.5.2 存</span></a></h3><p>在的bug</p><div class="hint-container warning"><p class="hint-container-title">思考</p><p>上面代码<code>string[::-1]</code>前两位省略了啥数字？尝试填上去</p></div><p>你有可能会写：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>

reverse <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>reverse<span class="token punctuation">)</span>

<span class="token comment"># output</span>
没有结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而既没有报错也没有输出结果，这是为什么？</p><figure><img src="`+v+`" alt="两者的方向错了" tabindex="0" loading="lazy"><figcaption>两者的方向错了</figcaption></figure><p>那么应该怎么办呢？</p><h3 id="_4-5-3-解决方法" tabindex="-1"><a class="header-anchor" href="#_4-5-3-解决方法"><span>4.5.3 解决方法</span></a></h3><ol><li>方法一：调换位置</li></ol><p>先思考存在什么问题？————少了一个字符</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>

reverse <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>reverse<span class="token punctuation">)</span>

<span class="token comment"># output</span>
sihtrofnro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么少了一个字符？</p><p>————存在一个bug，因为结束是0，但是字符获取操作([::])中的第一个和第二个位置分别为“左闭右开“，也就是说要想覆盖到0位置，中间的数字必须是0左边一个数字也就是-1，然而-1却又是最右边的位置，这样固然是不行的。</p><p>难道我们只能不写第二个位置，得到完整的倒序字符？————<code>reverse = string[11::-1]</code></p><p>这显然没有解决我们刚刚提出的问————前两位省略了啥数字？</p><ol start="2"><li>方法二：重新开始结尾</li></ol><p>重新写开始结尾</p><p>想想字符串的有序性，从右到左。</p><p>至于为什么要纠结前两个空的数字是什么————之后可能只要提取字符串的一部分</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>

reverse <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>reverse<span class="token punctuation">)</span>

<span class="token comment"># output</span>
sihtrofnrob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="022b9d9a5bd65c1c506370fb1ddcf56" tabindex="0" loading="lazy"><figcaption>022b9d9a5bd65c1c506370fb1ddcf56</figcaption></figure><p>小试牛刀： 获取 rofn</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>

<span class="token comment"># 获取rofn</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

selcet <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># output</span>
rofn
rofn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-字符串的内置方法" tabindex="-1"><a class="header-anchor" href="#_5-字符串的内置方法"><span>5. 字符串的内置方法</span></a></h2><h3 id="_5-1-upper" tabindex="-1"><a class="header-anchor" href="#_5-1-upper"><span>5.1 upper()</span></a></h3><ul><li>将字符串的内容，全部转换成小写。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># upper</span>
<span class="token comment"># 将字符串的内容，全部转换成小写。</span>
string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
upper_string <span class="token operator">=</span> string<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>upper_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
BORNFORTHIS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-lower" tabindex="-1"><a class="header-anchor" href="#_5-2-lower"><span>5.2 lower()</span></a></h3><ul><li>将字符串的内容，全部转换成小写。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .lower()</span>
<span class="token comment"># 将字符串的内容，全部转换成小写。</span>
string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
lower_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lower_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-capitalize" tabindex="-1"><a class="header-anchor" href="#_5-3-capitalize"><span>5.3 capitalize()</span></a></h3><ul><li>将首字母，转换成大写。（只对第一个字母大写，其他后面的不会变成大写</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .capitalize()</span>
<span class="token comment"># 将首字母，转换成大写。（只对第一个字母大写，其他后面的不会变成大写）</span>
string <span class="token operator">=</span> <span class="token string">&quot;bornforthis to aiyc&quot;</span>
capitalize_string <span class="token operator">=</span> string<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>capitalize_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
Bornforthis to aiyc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-titile" tabindex="-1"><a class="header-anchor" href="#_5-4-titile"><span>5.4 titile()</span></a></h3><ul><li>将字符串中的每个单词的首字母，转换成大写</li><li>且不管是什么间隔，都会转换成首字母大写</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .title()</span>
<span class="token comment"># 将字符串中的每个单词的首字母，转换成大写。</span>
pystring <span class="token operator">=</span> <span class="token string">&quot;bornforthis to aiyc&quot;</span>
title_string <span class="token operator">=</span> string<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>title_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis-to-aiyc&quot;</span> <span class="token comment"># 不管是什么间隔，都会转换成首字母大写</span>
title_string <span class="token operator">=</span> string<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>title_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
Bornforthis To Aiyc
Bornforthis<span class="token operator">-</span>To<span class="token operator">-</span>Aiyc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-startwith" tabindex="-1"><a class="header-anchor" href="#_5-5-startwith"><span>5.5 startwith()</span></a></h3><ul><li>检测字符串是不是以特定字符或单词开头，返回布尔值。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .startswith()</span>
<span class="token comment"># 检测字符串是不是以特定字符或单词开头，返回布尔值。</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
startswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>startswith_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
startswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;bo&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>startswith_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
startswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>startswith_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
startswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;b1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>startswith_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token boolean">False</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-endswith" tabindex="-1"><a class="header-anchor" href="#_5-6-endswith"><span>5.6 endswith()</span></a></h3><ul><li>检测字符串是不是以特定字符或单词结尾，返回布尔值。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .endswith()</span>
<span class="token comment"># 检测字符串是不是以特定字符或单词结尾，返回布尔值。</span>
string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
endswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;s&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>endswith_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
endswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;is&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>endswith_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
endswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>endswith_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
endswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;s6&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>endswith_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token boolean">False</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-7-count" tabindex="-1"><a class="header-anchor" href="#_5-7-count"><span>5.7 count()</span></a></h3><ul><li>计算特定字符或单词在目标字符串中存在的次数。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .count()</span>
<span class="token comment"># 计算特定字符或单词在目标字符串中存在的次数。</span>
string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
count_string <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>count_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
count_string <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&#39;or&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>count_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
count_string <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>count_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
count_string <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&#39;ap&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>count_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">2</span>
<span class="token number">2</span>
<span class="token number">0</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-8-find" tabindex="-1"><a class="header-anchor" href="#_5-8-find"><span>5.8 find()</span></a></h3><ul><li><p>寻找目标字符或单词在字符串中第一次出现的下标。</p></li><li><p>即使重复出现，也只是返回第一次出现的下标</p></li><li><p>如果是查询单词，那么 find() 返回目标单词的第一个字符下标。</p></li><li><p>如果，查询字符或单词不存在，则返回 -1。</p></li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .find()</span>
<span class="token comment"># 寻找目标字符或单词在字符串中第一次出现的下标。</span>
<span class="token comment"># 即使重复出现，也只是返回第一次出现的下标。</span>
<span class="token comment"># 如果是查询单词，那么 find() 返回目标单词的第一个字符下标。</span>
<span class="token comment"># 如果，查询字符或单词不存在，则返回 -1。</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
new_string<span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;for&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;aiyc&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">0</span>
<span class="token operator">-</span><span class="token number">1</span>
<span class="token number">4</span>
<span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-index" tabindex="-1"><a class="header-anchor" href="#_5-9-index"><span>5.9 index()</span></a></h3><ul><li>寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么 index() 返回目标单词的第一个字符的下标。</li><li>如果，查询的字符或单词不存在，则报错。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .index()</span>
<span class="token comment"># 寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么 index() 返回目标单词的第一个字符的下标。</span>
<span class="token comment"># 如果，查询的字符或单词不存在，则报错。</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">0</span>

string  <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
result  <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># output</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;C:\\Users\\Administrator\\PycharmProjects\\Coder\\Python\\code4.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">381</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    result  <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
ValueError<span class="token punctuation">:</span> substring <span class="token keyword">not</span> found

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;for&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token number">4</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;aiyc&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># output</span>
File <span class="token string">&quot;C:\\Users\\Administrator\\PycharmProjects\\Coder\\Python\\code4.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">385</span>
    Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
                    <span class="token operator">^</span>
SyntaxError<span class="token punctuation">:</span> invalid syntax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-10-isdigit" tabindex="-1"><a class="header-anchor" href="#_5-10-isdigit"><span>5.10 isdigit()</span></a></h3><ul><li>判断字符串是不是纯数字字符串，字符串中但凡有一个字符是非数字，则返回 False。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .isdigit()</span>
<span class="token comment"># 判断字符串是不是纯数字字符串，字符串中但凡有一个字符是非数字，则返回 False。</span>
string <span class="token operator">=</span> <span class="token string">&#39;12345678&#39;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;123 45678&#39;</span> <span class="token comment"># 中间有空格，不是纯数字字符串</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-11-isalpha" tabindex="-1"><a class="header-anchor" href="#_5-11-isalpha"><span>5.11 isalpha()</span></a></h3><ul><li>预判字符串是不是纯字母字符串，字符串但凡有一个非字母的，则返回False。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .isalpha()</span>
<span class="token comment"># 预判字符串是不是纯字母字符串，字符串但凡有一个非字母的，则返回False。</span>
string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;born forthis&#39;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-12-isalnum" tabindex="-1"><a class="header-anchor" href="#_5-12-isalnum"><span>5.12 isalnum()</span></a></h3><ul><li>判断字符串是不是纯数字或纯字母、纯数字字母字符串，字符串中一旦出现非数字非字母元素，则返回 False。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .isalnum()</span>
<span class="token comment"># 判断字符串是不是纯数字或纯字母、纯数字字母字符串，字符串中一旦出现非数字非字母元素，则返回 False。</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;12345678&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis8888888&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis 8888888&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-13-isupper" tabindex="-1"><a class="header-anchor" href="#_5-13-isupper"><span>5.13 isupper()</span></a></h3><ul><li>判断字符串中的字符否全大写，全大写则返回 True， 否则返回 False。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .isupper()</span>
<span class="token comment"># 判断字符串中的字符否全大写，全大写则返回 True， 否则返回 False。</span>

string <span class="token operator">=</span> <span class="token string">&#39;BORNFORTHIS&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;BORNFORTHIS12-&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;BORNFOforthis&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token boolean">False</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-14-islower" tabindex="-1"><a class="header-anchor" href="#_5-14-islower"><span>5.14 islower()</span></a></h3><ul><li>判断字符串是不是全小写，全小写则返回True,否则则返回False</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .islower()</span>
<span class="token comment"># 判断字符串是不是全小写，全小写则返回True,否则则返回False</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis123-&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthisA121-&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>
<span class="token boolean">True</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-15-isspace" tabindex="-1"><a class="header-anchor" href="#_5-15-isspace"><span>5.15 isspace()</span></a></h3><ul><li>判断字符串是否为纯空格，多少个空格都可以。纯空格则返回 True，否则返回 False。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .isspace()</span>
<span class="token comment"># 判断字符串是否为纯空格，多少个空格都可以。纯空格则返回 True，否则返回 False。</span>

string <span class="token operator">=</span> <span class="token string">&quot;     &quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">False</span>

string <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># output</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-16-strip" tabindex="-1"><a class="header-anchor" href="#_5-16-strip"><span>5.16 strip()</span></a></h3><ul><li>默认去掉目标字符串的前后空白字符，如果指定参数，则去掉指定字符。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .strip()</span>
<span class="token comment"># 默认去掉目标字符串的前后空白字符，如果指定参数，则去掉指定字符。</span>

string <span class="token operator">=</span> <span class="token string">&#39;   bornforthis   &#39;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串：&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空白字符串后：&quot;</span><span class="token punctuation">,</span> strip_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串：    bornforthis
去掉前后空白字符串后： bornforthis

string <span class="token operator">=</span> <span class="token string">&quot;-----bornforthis-----&quot;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串：&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后&#39;-&#39;字符后：&quot;</span><span class="token punctuation">,</span> strip_string<span class="token punctuation">)</span>
<span class="token comment"># output</span>
原本的字符串： <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后<span class="token string">&#39;-&#39;</span>字符后： bornforthis

string <span class="token operator">=</span> <span class="token string">&quot;--- --bornforthis-- ---&quot;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 只取掉连续的减号</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串：&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后&#39;-&#39;字符后:&quot;</span><span class="token punctuation">,</span> strip_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串： <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后<span class="token string">&#39;-&#39;</span>字符后<span class="token punctuation">:</span>  <span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span>

<span class="token comment"># 如果想去掉减号和空格呢？</span>
string <span class="token operator">=</span> <span class="token string">&#39;--- --bornforthis-- ---&#39;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&#39;- &#39;</span><span class="token punctuation">)</span> <span class="token comment"># 填入要去掉的字符（不计入先后顺序）</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后&#39;- &#39;字符后:&quot;</span><span class="token punctuation">,</span> strip_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后<span class="token string">&#39;- &#39;</span>字符后<span class="token punctuation">:</span> bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-17-istrip" tabindex="-1"><a class="header-anchor" href="#_5-17-istrip"><span>5.17 Istrip()</span></a></h3><ul><li>默认去掉字符左边的空白字符，如果指定参数，则去掉左边的指定字符。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .lstrip()</span>
<span class="token comment"># 默认去掉字符串左边的空白字符，如果指定参数，则去掉左边的指定字符。</span>

string <span class="token operator">=</span> <span class="token string">&#39;   bornforthis   &#39;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串：&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉左边空白字符串后：&quot;</span><span class="token punctuation">,</span> lstrip_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串：    bornforthis
去掉左边空白字符串后： bornforthis

string <span class="token operator">=</span> <span class="token string">&quot;----bornforthis----&quot;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串：&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉左边&#39;-&#39;后:&quot;</span><span class="token punctuation">,</span> lstrip_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串： <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉左边<span class="token string">&#39;-&#39;</span>后<span class="token punctuation">:</span> bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>

string <span class="token operator">=</span> <span class="token string">&#39;-- --bornforthis-- --&#39;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token string">&#39;- &#39;</span><span class="token punctuation">)</span> <span class="token comment"># 不分先后顺序</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉左边:&quot;</span><span class="token punctuation">,</span> lstrip_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>
去掉左边<span class="token punctuation">:</span> bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-18-rstrip" tabindex="-1"><a class="header-anchor" href="#_5-18-rstrip"><span>5.18 rstrip()</span></a></h3><ul><li>默认去掉字符串右边的空白字符，如果指定参数，则去掉右边的指定字符。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># .rstrip()</span>
<span class="token comment"># 默认去掉字符串右边的空白字符，如果指定参数，则去掉右边的指定字符。</span>
string <span class="token operator">=</span> <span class="token string">&#39;   bornforthis   &#39;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边空白字符后:&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串    bornforthis
去掉右边空白字符后<span class="token punctuation">:</span>    bornforthis

string <span class="token operator">=</span> <span class="token string">&#39;----bornforthis----&#39;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边&#39;-&#39;后:&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉右边<span class="token string">&#39;-&#39;</span>后<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis

string <span class="token operator">=</span> <span class="token string">&#39;-- --bornforthis-- --&#39;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">&quot;- &quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边&#39;-&#39;后&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串 <span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>
去掉右边<span class="token string">&#39;-&#39;</span>后 <span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-19-replace" tabindex="-1"><a class="header-anchor" href="#_5-19-replace"><span>5.19 replace()</span></a></h3><p><code>replace(old, new, count)</code>第一个位置传入待替换的旧（old）字符，第二个位置传入要替换的新的字符（new），默认替换全部，count控制替换次数。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;    bornforthis    &quot;</span>
replace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 把空白字符替换成 *</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;替换后:&quot;</span><span class="token punctuation">,</span> replace_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span>     bornforthis
替换后<span class="token punctuation">:</span> <span class="token operator">**</span><span class="token operator">**</span>bornforthis<span class="token operator">**</span><span class="token operator">**</span>

string <span class="token operator">=</span> <span class="token string">&#39;ai-bornforthis-ai&#39;</span>
replace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;love&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 把 ai 换成 love，默认全部替换</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;替换后:&quot;</span><span class="token punctuation">,</span> replace_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ai
替换后<span class="token punctuation">:</span> love<span class="token operator">-</span>bornforthis<span class="token operator">-</span>love

string <span class="token operator">=</span> <span class="token string">&#39;ai-bornforthis-ai&#39;</span>
replace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;ai&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;love&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># 只替换一次</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;替换后:&quot;</span><span class="token punctuation">,</span> replace_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ai
替换后<span class="token punctuation">:</span> love<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-20-split" tabindex="-1"><a class="header-anchor" href="#_5-20-split"><span>5.20 split()</span></a></h3><p><code>.split(sep, maxsplit)</code>以特定进行分割，默认空格分割。如果传入参数（sep），则以参数进行分割。返回分割后的列表。maxsplit用于控制分割几次。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;ai bornforthis&#39;</span>
split_string <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后:&quot;</span><span class="token punctuation">,</span> split_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span> ai bornforthis
分割后<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">]</span>

string <span class="token operator">=</span> <span class="token string">&#39;ai-bornforthis-ai&#39;</span>
split_string <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 以 - 分割</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后:&quot;</span><span class="token punctuation">,</span> split_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ai
分割后<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ai&#39;</span><span class="token punctuation">]</span>

string <span class="token operator">=</span> <span class="token string">&#39;ai-bornforthis-love&#39;</span>
split_string <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后:&quot;</span><span class="token punctuation">,</span> split_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>love
分割后<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis-love&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-21-rsplit" tabindex="-1"><a class="header-anchor" href="#_5-21-rsplit"><span>5.21 rsplit()</span></a></h3><p><code>.rsplit(sep, maxsplit)</code>从字符右边进行分割，也可以传入参数（sep），进行指定分割。返回分隔后的列表。maxsplit 指定分割次数。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;ai-bornforthis-love&#39;</span>
rsplit_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后:&quot;</span><span class="token punctuation">,</span> rsplit_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>love
分割后<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;love&#39;</span><span class="token punctuation">]</span>

string <span class="token operator">=</span> <span class="token string">&#39;ai-bornforthis-love&#39;</span>
rsplit_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后:&quot;</span><span class="token punctuation">,</span> rsplit_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>love
分割后<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ai-bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;love&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-22-join" tabindex="-1"><a class="header-anchor" href="#_5-22-join"><span>5.22 join()</span></a></h3><p>以特定字符使字符串间隔</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>string  <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
join_string <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;拼接后:&quot;</span><span class="token punctuation">,</span> join_string<span class="token punctuation">)</span>

<span class="token comment"># output</span>
原本的字符串<span class="token punctuation">:</span> bornforthis
拼接后<span class="token punctuation">:</span> b<span class="token operator">-</span>o<span class="token operator">-</span>r<span class="token operator">-</span>n<span class="token operator">-</span>f<span class="token operator">-</span>o<span class="token operator">-</span>r<span class="token operator">-</span>t<span class="token operator">-</span>h<span class="token operator">-</span>i<span class="token operator">-</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,120);function w(x,T){const i=l("CodeTabs");return c(),r("div",null,[g,n("ul",null,[n("li",null,[h,u(i,{id:"43",data:[{id:"单引号"},{id:"双引号"}]},{title0:a(({value:t,isActive:e})=>[s("单引号")]),title1:a(({value:t,isActive:e})=>[s("双引号")]),tab0:a(({value:t,isActive:e})=>[y]),tab1:a(({value:t,isActive:e})=>[_]),_:1})]),f]),q])}const P=o(b,[["render",w],["__file","4.str-Notebook.html.vue"]]),I=JSON.parse(`{"path":"/Notability/python/4.str-Notebook.html","title":"str Notebook","lang":"zh-CN","frontmatter":{"title":"str Notebook","date":"2024-03-29T15:25:42.000Z","isOriginal":true,"category":["python"],"tag":["python","编程","教程"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"description":"1. 字符串的定义 字符串是由字母、数字和特殊字符来组成的序列 a4034a755a9502dce168bbee003b2cca4034a755a9502dce168bbee003b2cc 2. 创建字符串 如何创建字符串？ ————使用 单引号、双引号 或者 三引号 。 为什么Python同时支持三种创建字符串的方法 但是英文当中可以缩写如下： 因为...","head":[["meta",{"property":"og:url","content":"https://dailyrecord4ryan.com/Notability/python/4.str-Notebook.html"}],["meta",{"property":"og:site_name","content":"Website of Ryan"}],["meta",{"property":"og:title","content":"str Notebook"}],["meta",{"property":"og:description","content":"1. 字符串的定义 字符串是由字母、数字和特殊字符来组成的序列 a4034a755a9502dce168bbee003b2cca4034a755a9502dce168bbee003b2cc 2. 创建字符串 如何创建字符串？ ————使用 单引号、双引号 或者 三引号 。 为什么Python同时支持三种创建字符串的方法 但是英文当中可以缩写如下： 因为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-01T12:42:15.000Z"}],["meta",{"property":"article:author","content":"Ryan"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"编程"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:published_time","content":"2024-03-29T15:25:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-01T12:42:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"str Notebook\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-29T15:25:42.000Z\\",\\"dateModified\\":\\"2024-04-01T12:42:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan\\",\\"url\\":\\"https://dailyrecord4ryan.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 字符串的定义","slug":"_1-字符串的定义","link":"#_1-字符串的定义","children":[]},{"level":2,"title":"2. 创建字符串","slug":"_2-创建字符串","link":"#_2-创建字符串","children":[]},{"level":2,"title":"3. 字符串长度","slug":"_3-字符串长度","link":"#_3-字符串长度","children":[]},{"level":2,"title":"4. 字符串中的字符获取","slug":"_4-字符串中的字符获取","link":"#_4-字符串中的字符获取","children":[{"level":3,"title":"4.1 获取单个字符","slug":"_4-1-获取单个字符","link":"#_4-1-获取单个字符","children":[]},{"level":3,"title":"4.2 获取多个连续字符（子字符串）","slug":"_4-2-获取多个连续字符-子字符串","link":"#_4-2-获取多个连续字符-子字符串","children":[]},{"level":3,"title":"4.3 获取多个不连续的字符","slug":"_4-3-获取多个不连续的字符","link":"#_4-3-获取多个不连续的字符","children":[]},{"level":3,"title":"4.4 优化","slug":"_4-4-优化","link":"#_4-4-优化","children":[]},{"level":3,"title":"4.5  字符串的倒序","slug":"_4-5-字符串的倒序","link":"#_4-5-字符串的倒序","children":[]},{"level":3,"title":"4.5.1 实现","slug":"_4-5-1-实现","link":"#_4-5-1-实现","children":[]},{"level":3,"title":"4.5.2 存","slug":"_4-5-2-存","link":"#_4-5-2-存","children":[]},{"level":3,"title":"4.5.3 解决方法","slug":"_4-5-3-解决方法","link":"#_4-5-3-解决方法","children":[]}]},{"level":2,"title":"5. 字符串的内置方法","slug":"_5-字符串的内置方法","link":"#_5-字符串的内置方法","children":[{"level":3,"title":"5.1 upper()","slug":"_5-1-upper","link":"#_5-1-upper","children":[]},{"level":3,"title":"5.2 lower()","slug":"_5-2-lower","link":"#_5-2-lower","children":[]},{"level":3,"title":"5.3 capitalize()","slug":"_5-3-capitalize","link":"#_5-3-capitalize","children":[]},{"level":3,"title":"5.4 titile()","slug":"_5-4-titile","link":"#_5-4-titile","children":[]},{"level":3,"title":"5.5 startwith()","slug":"_5-5-startwith","link":"#_5-5-startwith","children":[]},{"level":3,"title":"5.6 endswith()","slug":"_5-6-endswith","link":"#_5-6-endswith","children":[]},{"level":3,"title":"5.7 count()","slug":"_5-7-count","link":"#_5-7-count","children":[]},{"level":3,"title":"5.8 find()","slug":"_5-8-find","link":"#_5-8-find","children":[]},{"level":3,"title":"5.9 index()","slug":"_5-9-index","link":"#_5-9-index","children":[]},{"level":3,"title":"5.10  isdigit()","slug":"_5-10-isdigit","link":"#_5-10-isdigit","children":[]},{"level":3,"title":"5.11 isalpha()","slug":"_5-11-isalpha","link":"#_5-11-isalpha","children":[]},{"level":3,"title":"5.12 isalnum()","slug":"_5-12-isalnum","link":"#_5-12-isalnum","children":[]},{"level":3,"title":"5.13 isupper()","slug":"_5-13-isupper","link":"#_5-13-isupper","children":[]},{"level":3,"title":"5.14 islower()","slug":"_5-14-islower","link":"#_5-14-islower","children":[]},{"level":3,"title":"5.15 isspace()","slug":"_5-15-isspace","link":"#_5-15-isspace","children":[]},{"level":3,"title":"5.16 strip()","slug":"_5-16-strip","link":"#_5-16-strip","children":[]},{"level":3,"title":"5.17 Istrip()","slug":"_5-17-istrip","link":"#_5-17-istrip","children":[]},{"level":3,"title":"5.18 rstrip()","slug":"_5-18-rstrip","link":"#_5-18-rstrip","children":[]},{"level":3,"title":"5.19 replace()","slug":"_5-19-replace","link":"#_5-19-replace","children":[]},{"level":3,"title":"5.20 split()","slug":"_5-20-split","link":"#_5-20-split","children":[]},{"level":3,"title":"5.21 rsplit()","slug":"_5-21-rsplit","link":"#_5-21-rsplit","children":[]},{"level":3,"title":"5.22 join()","slug":"_5-22-join","link":"#_5-22-join","children":[]}]}],"git":{"createdTime":1711698165000,"updatedTime":1711975335000,"contributors":[{"name":"Lxj679","email":"2944170474@qq.com","commits":18}]},"readingTime":{"minutes":17.3,"words":5189},"filePathRelative":"Notability/python/4.str-Notebook.md","localizedDate":"2024年3月29日","excerpt":"<h2>1. 字符串的定义</h2>\\n<p>字符串是由字母、数字和特殊字符来组成的序列</p>\\n<figure><figcaption>a4034a755a9502dce168bbee003b2cc</figcaption></figure>\\n<h2>2. 创建字符串</h2>\\n<p>如何创建字符串？</p>\\n<p>————使用 <strong><span style=\\"color : orange\\"> 单引号、双引号</span></strong> 或者 <strong><span style=\\"color : orange\\"> 三引号</span></strong> 。</p>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code>name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'ryan'</span>\\nnumber <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'8'</span>\\nparagraph <span class=\\"token operator\\">=</span> <span class=\\"token triple-quoted-string string\\">'''hello, ryan.\\nnice to meet u'''</span>\\nparagraph_two  <span class=\\"token operator\\">=</span> <span class=\\"token triple-quoted-string string\\">\\"\\"\\"Hi, ryan\\nnice to meet u 2\\"\\"\\"</span>\\n</code></pre></div>","autoDesc":true}`);export{P as comp,I as data};
