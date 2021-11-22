"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[983],{5475:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-189e6186",path:"/developing/network/join-mainnet.html",title:"Joining Mainnet",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Joining Testnet",slug:"joining-testnet",children:[]},{level:2,title:"Relayers",slug:"relayers",children:[]}],filePathRelative:"developing/network/join-mainnet.md",git:{updatedTime:1637614253e3,contributors:[{name:"Daniel Farina",email:"contact@nevulas.com",commits:1}]}}},8036:(s,n,a)=>{a.r(n),a.d(n,{default:()=>o});const e=(0,a(6252).uE)('<h1 id="joining-mainnet" tabindex="-1"><a class="header-anchor" href="#joining-mainnet" aria-hidden="true">#</a> Joining Mainnet</h1><p>Make sure you have <a href="../cli/install">installed the Osmosis Binary (CLI).</a></p><p>Use osmosisd to initialize your node (replace the NODE_NAME with a name of your choosing):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">osmosisd init NODE_NAME</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Download and place the genesis file in the osmosis config folder:</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#adbac7;">wget -O ~/.osmosisd/config/genesis.json https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>We will now set up cosmovisor to ensure any future upgrades happen flawlessly. To install Cosmovisor:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> $HOME</span></span>\n<span class="line"><span style="color:#ADBAC7;">git clone https://github.com/cosmos/cosmos-sdk</span></span>\n<span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> cosmos-sdk</span></span>\n<span class="line"><span style="color:#ADBAC7;">git checkout v0.42.9</span></span>\n<span class="line"><span style="color:#ADBAC7;">make cosmovisor</span></span>\n<span class="line"><span style="color:#ADBAC7;">cp cosmovisor/cosmovisor $GOPATH/bin/cosmovisor</span></span>\n<span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> $HOME</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Create the required directories:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">mkdir -p </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor</span></span>\n<span class="line"><span style="color:#ADBAC7;">mkdir -p </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor/genesis</span></span>\n<span class="line"><span style="color:#ADBAC7;">mkdir -p </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor/genesis/bin</span></span>\n<span class="line"><span style="color:#ADBAC7;">mkdir -p </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor/upgrades</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Set the environment variables:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;# Setup Cosmovisor&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;export DAEMON_NAME=osmosisd&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;export DAEMON_HOME=</span><span style="color:#ADBAC7;">$HOME</span><span style="color:#96D0FF;">/.osmosisd&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;export DAEMON_ALLOW_DOWNLOAD_BINARIES=false&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;export DAEMON_LOG_BUFFER_SIZE=512&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;export DAEMON_RESTART_AFTER_UPGRADE=true&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">source</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Copy the current osmosisd binary into the cosmovisor/genesis folder:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">cp $GOPATH/bin/osmosisd </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor/genesis/bin</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To check your work, ensure the version of cosmovisor and osmosisd are the same:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">cosmovisor version</span></span>\n<span class="line"><span style="color:#ADBAC7;">osmosisd version</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>These two command should both output 4.2.0</p><p>We must now download the latest chain data from a snapshot provider. In this example, I will use <a>https://quicksync.io/networks/osmosis.html</a> and I will use the pruned chain data. You may choose the default or archived based off your needs.</p><p>Download liblz4-tool to handle the compressed file:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">sudo apt-get install wget liblz4-tool aria2 -y</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Before we download the chain data, we must first initialize the file name from quicksync. Hover over the download button from page linked above and you will see the file name (specifically the date and time). Replace the below with the timestamp listed for you:</p><p>EXAMPLE: If the download link is <a>https://get.quicksync.io/osmosis-1-pruned.20211119.0910.tar.lz4</a>, then</p><p>FILENAME=osmosis-1-pruned.20211119.0910.tar.lz4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">FILENAME=osmosis-1-TYPE.DATE.TIME.tar.lz4</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Download the chain data its corresponding checksum:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> $HOME/.osmosisd/</span></span>\n<span class="line"><span style="color:#ADBAC7;">aria2c -x5 https://get.quicksync.io/$FILENAME</span></span>\n<span class="line"><span style="color:#ADBAC7;">OR (single thread but no double space needed on harddisk)</span></span>\n<span class="line"><span style="color:#ADBAC7;">wget -O - https://get.quicksync.io/$FILENAME </span><span style="color:#F47067;">|</span><span style="color:#ADBAC7;"> lz4 -d </span><span style="color:#F47067;">|</span><span style="color:#ADBAC7;"> tar -xvf -</span></span>\n<span class="line"><span style="color:#ADBAC7;">wget https://raw.githubusercontent.com/chainlayer/quicksync-playbooks/master/roles/quicksync/files/checksum.sh</span></span>\n<span class="line"><span style="color:#ADBAC7;">wget https://get.quicksync.io/$FILENAME.checksum</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Compare the checksum with the onchain version:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">curl -s https://api-osmosis.cosmostation.io/v1/tx/hash/</span><span style="color:#96D0FF;">`curl -s https://get.quicksync.io/</span><span style="color:#ADBAC7;">$FILENAME</span><span style="color:#96D0FF;">.hash`</span><span style="color:#F47067;">|</span><span style="color:#ADBAC7;">jq -r </span><span style="color:#96D0FF;">&#39;.data.tx.body.memo&#39;</span><span style="color:#F47067;">|</span><span style="color:#ADBAC7;">sha512sum -c</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The output should state &quot;checksum: OK&quot;</p><p>You are now ready to start the Osmosis Daemon through cosmovisor. Lets set up a service to allow cosmovisor to run in the background as well as restart automatically if it runs into any problems:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;[Unit]</span></span>\n<span class="line"><span style="color:#96D0FF;">Description=Cosmovisor daemon</span></span>\n<span class="line"><span style="color:#96D0FF;">After=network-online.target</span></span>\n<span class="line"><span style="color:#96D0FF;">[Service]</span></span>\n<span class="line"><span style="color:#96D0FF;">Environment=&quot;</span><span style="color:#ADBAC7;">DAEMON_NAME=osmosisd</span><span style="color:#96D0FF;">&quot;</span></span>\n<span class="line"><span style="color:#96D0FF;">Environment=&quot;</span><span style="color:#ADBAC7;">DAEMON_HOME=${HOME}/.osmosisd</span><span style="color:#96D0FF;">&quot;</span></span>\n<span class="line"><span style="color:#96D0FF;">Environment=&quot;</span><span style="color:#ADBAC7;">DAEMON_RESTART_AFTER_UPGRADE=true</span><span style="color:#96D0FF;">&quot;</span></span>\n<span class="line"><span style="color:#96D0FF;">Environment=&quot;</span><span style="color:#ADBAC7;">DAEMON_ALLOW_DOWNLOAD_BINARIES=false</span><span style="color:#96D0FF;">&quot;</span></span>\n<span class="line"><span style="color:#96D0FF;">Environment=&quot;</span><span style="color:#ADBAC7;">DAEMON_LOG_BUFFER_SIZE=512</span><span style="color:#96D0FF;">&quot;</span></span>\n<span class="line"><span style="color:#96D0FF;">User=</span><span style="color:#ADBAC7;">$USER</span></span>\n<span class="line"><span style="color:#96D0FF;">ExecStart=</span><span style="color:#ADBAC7;">${HOME}</span><span style="color:#96D0FF;">/go/bin/cosmovisor start</span></span>\n<span class="line"><span style="color:#96D0FF;">Restart=always</span></span>\n<span class="line"><span style="color:#96D0FF;">RestartSec=3</span></span>\n<span class="line"><span style="color:#96D0FF;">LimitNOFILE=4096</span></span>\n<span class="line"><span style="color:#96D0FF;">[Install]</span></span>\n<span class="line"><span style="color:#96D0FF;">WantedBy=multi-user.target</span></span>\n<span class="line"><span style="color:#96D0FF;">&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">cosmovisor.service</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Move this new file to the systemd directory:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">sudo mv cosmovisor.service /lib/systemd/system/cosmovisor.service</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Reload and start the service:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">sudo systemctl daemon-reload</span></span>\n<span class="line"><span style="color:#ADBAC7;">sudo systemctl start cosmovisor</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Check the status of your service:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">sudo systemctl status cosmovisor</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To see live logs of your service:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">journalctl -u cosmovisor -f</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Guide as of 17 November 2021.</p><h2 id="joining-testnet" tabindex="-1"><a class="header-anchor" href="#joining-testnet" aria-hidden="true">#</a> Joining Testnet</h2><p>Start by ensuring your system is up to date:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">sudo apt update</span></span>\n<span class="line"><span style="color:#ADBAC7;">sudo apt upgrade</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Install tools if not already installed (git, gcc, make, etc.):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">sudo apt install git build-essential ufw curl jq snapd --yes</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Install go:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">wget -q -O - https://git.io/vQhTU </span><span style="color:#F47067;">|</span><span style="color:#ADBAC7;"> bash -s -- --version 1.17.2</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>After installed, open new terminal to properly load go</p><p>Clone the osmosis repo, checkout and install v3.2.0_with_cache:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> $HOME</span></span>\n<span class="line"><span style="color:#ADBAC7;">git clone https://github.com/osmosis-labs/osmosis</span></span>\n<span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> osmosis</span></span>\n<span class="line"><span style="color:#ADBAC7;">git checkout v3.2.0_with_cache</span></span>\n<span class="line"><span style="color:#ADBAC7;">make install</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>You have now installed the Osmosis Daemon (osmosisd). Use osmosisd to initialize your node (replace the NODE_NAME with a name of your choosing):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">osmosisd init NODE_NAME --chain-id=osmosis-testnet-0</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>We now need to open the config.toml to edit the seed list:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> $HOME/.osmosisd/config</span></span>\n<span class="line"><span style="color:#ADBAC7;">nano config.toml</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Use page down or arrow keys to get to the line that says seeds = &quot;&quot; and replace it with the following:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">seeds = </span><span style="color:#96D0FF;">&quot;4eaed17781cd948149098d55f80a28232a365236@testmosis.blockpane.com:26656&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Then pres Ctrl+O, then enter to save, then Ctrl+X to exit</p><p>We will now set up cosmovisor to ensure the upgrade happens flawlessly. To install Cosmovisor:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> $HOME</span></span>\n<span class="line"><span style="color:#ADBAC7;">git clone https://github.com/cosmos/cosmos-sdk</span></span>\n<span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> cosmos-sdk</span></span>\n<span class="line"><span style="color:#ADBAC7;">git checkout v0.42.9</span></span>\n<span class="line"><span style="color:#ADBAC7;">make cosmovisor</span></span>\n<span class="line"><span style="color:#ADBAC7;">cp cosmovisor/cosmovisor $GOPATH/bin/cosmovisor</span></span>\n<span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> $HOME</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Create the required directories:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">mkdir -p </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor</span></span>\n<span class="line"><span style="color:#ADBAC7;">mkdir -p </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor/genesis</span></span>\n<span class="line"><span style="color:#ADBAC7;">mkdir -p </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor/genesis/bin</span></span>\n<span class="line"><span style="color:#ADBAC7;">mkdir -p </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor/upgrades</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Set the environment variables:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;# Setup Cosmovisor&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;export DAEMON_NAME=osmosisd&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;export DAEMON_HOME=</span><span style="color:#ADBAC7;">$HOME</span><span style="color:#96D0FF;">/.osmosisd&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;export DAEMON_ALLOW_DOWNLOAD_BINARIES=false&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;export DAEMON_LOG_BUFFER_SIZE=512&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;export DAEMON_RESTART_AFTER_UPGRADE=true&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;&gt;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"><span style="color:#6CB6FF;">source</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.profile</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Download and replace the genesis file:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> $HOME/.osmosisd/config</span></span>\n<span class="line"><span style="color:#ADBAC7;">wget https://github.com/osmosis-labs/networks/raw/unity/v4/osmosis-1/upgrades/v4/testnet/genesis.tar.bz2</span></span>\n<span class="line"><span style="color:#ADBAC7;">tar -xjf genesis.tar.bz2</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Copy the current osmosisd binary into the cosmovisor/genesis folder:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">cp $GOPATH/bin/osmosisd </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor/genesis/bin</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To check your work, ensure the version of cosmovisor and osmosisd are the same:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">cosmovisor version</span></span>\n<span class="line"><span style="color:#ADBAC7;">osmosisd version</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>These two command should both output 3.1.0-23-g517562d</p><p>Before we start cosmovisor, lets prep the upgrade to v4.0.0-rc1:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">mkdir -p </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor/upgrades/v4/bin</span></span>\n<span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> $HOME/osmosis</span></span>\n<span class="line"><span style="color:#ADBAC7;">git checkout v4.0.0-rc1</span></span>\n<span class="line"><span style="color:#ADBAC7;">make build</span></span>\n<span class="line"><span style="color:#ADBAC7;">cp build/osmosisd </span><span style="color:#F47067;">~</span><span style="color:#ADBAC7;">/.osmosisd/cosmovisor/upgrades/v4/bin</span></span>\n<span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> $HOME</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Reset private validator file to genesis state:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">osmosisd unsafe-reset-all</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>While we could start cosmovisor now with &quot;cosmovisor start&quot;, lets set up a service to allow cosmovisor to run in the background as well as restart automatically if it runs into any problems:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#6CB6FF;">echo</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;[Unit]</span></span>\n<span class="line"><span style="color:#96D0FF;">Description=Cosmovisor daemon</span></span>\n<span class="line"><span style="color:#96D0FF;">After=network-online.target</span></span>\n<span class="line"><span style="color:#96D0FF;">[Service]</span></span>\n<span class="line"><span style="color:#96D0FF;">Environment=&quot;</span><span style="color:#ADBAC7;">DAEMON_NAME=osmosisd</span><span style="color:#96D0FF;">&quot;</span></span>\n<span class="line"><span style="color:#96D0FF;">Environment=&quot;</span><span style="color:#ADBAC7;">DAEMON_HOME=${HOME}/.osmosisd</span><span style="color:#96D0FF;">&quot;</span></span>\n<span class="line"><span style="color:#96D0FF;">Environment=&quot;</span><span style="color:#ADBAC7;">DAEMON_RESTART_AFTER_UPGRADE=true</span><span style="color:#96D0FF;">&quot;</span></span>\n<span class="line"><span style="color:#96D0FF;">Environment=&quot;</span><span style="color:#ADBAC7;">DAEMON_ALLOW_DOWNLOAD_BINARIES=false</span><span style="color:#96D0FF;">&quot;</span></span>\n<span class="line"><span style="color:#96D0FF;">Environment=&quot;</span><span style="color:#ADBAC7;">DAEMON_LOG_BUFFER_SIZE=512</span><span style="color:#96D0FF;">&quot;</span></span>\n<span class="line"><span style="color:#96D0FF;">User=</span><span style="color:#ADBAC7;">$USER</span></span>\n<span class="line"><span style="color:#96D0FF;">ExecStart=</span><span style="color:#ADBAC7;">${HOME}</span><span style="color:#96D0FF;">/go/bin/cosmovisor start</span></span>\n<span class="line"><span style="color:#96D0FF;">Restart=always</span></span>\n<span class="line"><span style="color:#96D0FF;">RestartSec=3</span></span>\n<span class="line"><span style="color:#96D0FF;">LimitNOFILE=4096</span></span>\n<span class="line"><span style="color:#96D0FF;">[Install]</span></span>\n<span class="line"><span style="color:#96D0FF;">WantedBy=multi-user.target</span></span>\n<span class="line"><span style="color:#96D0FF;">&quot;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">cosmovisor.service</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Move this new file to the systemd directory:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">sudo mv cosmovisor.service /lib/systemd/system/cosmovisor.service</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Reload and start the service:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">sudo systemctl daemon-reload</span></span>\n<span class="line"><span style="color:#ADBAC7;">sudo systemctl start cosmovisor</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Check the status of your service:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">sudo systemctl status cosmovisor</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To see live logs of your service:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">journalctl -u cosmovisor -f</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The process should initialize and get to block 1122200, where it will automatically upgrade to v4.0.0-rc1</p><p>At around block height 1128853, when reading the logs you will see many notifications of &quot;slashing and jailing validator&quot;. This is due to fact that many validators did not participate in the testnet and therefore get jailed at the same time (approx 30,000 blocks after the upgrade). In my experience, this may cause your node to reset due to a memory error. As long as you set up the service above, it will automatically reset and eventually get passed this difficult block.</p><p>Guide as of 17 November 2021.</p><h2 id="relayers" tabindex="-1"><a class="header-anchor" href="#relayers" aria-hidden="true">#</a> Relayers</h2>',88),l={},o=(0,a(3744).Z)(l,[["render",function(s,n){return e}]])}}]);