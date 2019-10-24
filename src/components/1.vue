<template>
    <div class="content">
        <div class="header">
            <div class="status-bar"></div>
            <div class="nav">
                <text class="icon location"></text>
                <text class="location-city-text"></text>
                <div class="input-box">
                    <input class="input-box-input" placeholder="默认关键字" @focus="inputfocus" >
                    <text class="icon search"></text>
                </div>
                <text @click="toMsg" class="icon tongzhi"></text>
            </div>
        </div>

        <div class="category-list" :style="{top: headerheight + 'wx'}">
            <list class="left" :show-scrollbar="false">
                <cell v-for="(row, index) in categoryList" :key="index" :ref="'tab'+index">
                    <div class="left-row" :class="[index === showCategoryIndex ? 'left-block-on' : '' ]" @click="goToCategory($event, 'category'+index, index)">
                        <div class="left-text">
                            <div class="left-block" :class="[index === showCategoryIndex ? 'left-block-on' : '']"></div>
                            <div class="left-text-text" :class="index === showCategoryIndex ? 'left-text-on' : ''"></div>
                        </div>
                    </div>
                </cell>
            </list>

            <list class="right">
                <template v-for="(row, index) in categoryList">
                    <header :key="index">
                        <div class="tab">
                            <text class="category-title">{{ row.title }}</text>
                            <text class="category-title-min">xxxxxx</text>
                        </div>
                    </header>
                    <cell :ref="'category' + index" :key="index" @disappear="ondisappear($event, 'tab' + index, index)" @appear = "onappear($event, 'tab' + index, index)">
                        <div class="right-category">
                            <div class="right-category">
                                <div class="right-banner"><image class="right-banner-image" :src="row.banner"></image></div>
                                <div class="right-list">
                                    <div class="right-box" v-for="(box, i) in row.list" :key="i" @click>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </cell>
                </template>
            </list>
        </div>
    </div>
</template>