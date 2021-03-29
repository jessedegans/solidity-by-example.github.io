// metadata
export const version = "0.7.6"
export const title = "Function Selector"
export const description = "Example of how function selectors are computed"

const html = `<p>When a function is called, the first 4 bytes of <code>calldata</code> specifies which function to call.</p>
<p>This 4 bytes is called a function selector.</p>
<p>Take for example, this code below. It uses <code>call</code> to execute <code>transfer</code> on a contract at the address <code>addr</code>.</p>
<pre><code class="language-solidity">addr.<span class="hljs-built_in">call</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"transfer(address,uint256)"</span>, <span class="hljs-number">0</span>xSomeAddress, <span class="hljs-number">123</span>))
</code></pre>
<p>The first 4 bytes returned from <code>abi.encodeWithSignature(....)</code> is the function selector.</p>
<p>Perhaps you can save a tiny amount of gas if you precompute and inline the function selector in your code?</p>
<p>Here is how the function selector is computed.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FunctionSelector</span> </span>{
    <span class="hljs-comment">/*
    "transfer(address,uint256)"
    0xa9059cbb
    "transferFrom(address,address,uint256)"
    0x23b872dd
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getSelector</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">calldata</span> _func</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">bytes4</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-keyword">bytes</span>(_func)));
    }
}
</code></pre>
`

export default html
