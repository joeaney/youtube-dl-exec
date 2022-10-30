/* eslint-disable */
declare module 'youtube-dl-exec' {
    import { ExecaChildProcess, Options } from 'execa';

    type YtFormat = {
        asr: number,
        filesize: number,
        format_id: string,
        format_note: string,
        fps: number,
        height: number,
        quality: number,
        tbr: number,
        vbr?: number,
        url: string,
        width: number,
        ext: string,
        vcodec: string,
        acodec: string,
        abr: number,
        downloader_options: unknown,
        container: string,
        format: string,
        protocol: string,
        http_headers: unknown
    }

    type YtThumbnail = {
        height: number,
        url: string,
        width: number,
        resolution: string,
        id: string,
    }

    type YtResponse = {
        id: string,
        title: string,
        formats: YtFormat[],
        thumbnails: YtThumbnail[],
        description: string,
        upload_date: string,
        uploader: string,
        uploader_id: string,
        uploader_url: string,
        channel_id: string,
        channel_url: string,
        duration: number,
        view_count: number,
        average_rating: number,
        age_limit: number,
        webpage_url: string,
        categories: string[],
        tags: string[],
        is_live: boolean,
        like_count: number,
        dislike_count: number,
        channel: string,
        track: string,
        artist: string,
        creator: string,
        alt_title: string,
        extractor: string,
        webpage_url_basename: string,
        extractor_key: string,
        playlist: string,
        playlist_index: number,
        thumbnail: string,
        display_id: string,
        requested_subtitles: unknown,
        asr: number,
        filesize: number,
        format_id: string,
        format_note: string,
        fps: number,
        height: number,
        quality: number,
        tbr: number,
        url: string,
        width: number,
        ext: string,
        vcodec: string,
        acodec: string,
        abr: number,
        downloader_options: { http_chunk_size: number },
        container: string,
        format: string,
        protocol: string,
        http_headers: unknown,
        fulltitle: string,
        _filename: string
    }

    type YtFlags = {

        /**
         * General Options
         */
        help?: boolean,
        version?: boolean,
        update?: boolean,
        noUpdate?: boolean,
        ignoreErrors?: boolean,
        noAbortOnError?: boolean,
        abortOnError?: boolean,
        dumpUserAgent?: boolean,
        listExtractors?: boolean,
        extractorDescriptions?: boolean,
        useExtractors?: string[], 
        defaultSearch?: string,
        ignoreConfig?: boolean,
        noConfigLocation?: string,
        configLocation?: string,
        flatPlaylist?: boolean,
        noFlatPlaylist?: boolean,
        liveFromStart?: boolean,
        noLiveFromStart?: boolean,
        waitForVideo?: string,
        noWaitForVideo?: boolean,
        markWatched?: boolean,
        noMarkWatched?: boolean,
        noColors?: boolean,
        compactOptions?: string,
        alias?: string,

        /**
         * Network Options
         */
        proxy?: string,
        socketTimeout?: number,
        sourceAddress?: string,
        forceIpv4?: boolean,
        forceIpv6?: boolean,
        
        /**
         * Geo-restriction
         */
        geoVerificationProxy?: string,
        geoBypass?: boolean,
        noGeoBypass?: boolean,
        geoBypassCountry?: string,
        geoBypassIpBlock?: string,
        
        /**
         * Video Selection
         */
        playlistItems?: string,
        minFilesize?: string,
        maxFilesize?: string,
        date?: string,
        datebefore?: string,
        dateafter?: string,
        matchFilters?: string[],
        noMatchFilter?: boolean,
        noPlaylist?: boolean,
        yesPlaylist?: boolean,
        ageLimit?: number,
        downloadArchive?: string,
        maxDownloads?: number,
        breakOnExisting?: boolean,
        breakOnReject?: boolean,
        breakPerInput?: boolean,
        noBreakPerInput?: boolean,
        skipPlaylistAfterErrors?: number,

        /**
         * Download Options
         */
        concurrentFragments?: number,
        limitRate?: string,
        throttledRate?: string, 
        retries?: number | 'infinite',
        fileAccessRetries?: number | 'infinite',
        fragmentRetries?: number | 'infinite',
        retrySleep?: string,
        skipUnavailableFragments?: boolean 
        abortOnUnavailableFragment?: boolean,
        keepFragments?: boolean,
        noKeepFragments?: boolean,
        bufferSize?: string,
        resizeBuffer?: boolean,
        httpChunkSize?: string,
        playlistRandom?: boolean,
        lazyPlaylist?: boolean,
        noLazyPlaylist?: boolean,
        xattrSetFilesize?: boolean,
        hlsUseMpegts?: boolean,
        downloadSections?: string,
        downloader?: string,
        downloaderArgs?: string,

        /**
         * Filesystem Options
         */
        batchFile?: string,
        noBatchFile?: boolean,
        paths?: string,
        output?: string,
        outputNaPlaceholder?: string,
        restrictFilenames?: boolean,
        noRestrictFilenames?: boolean,
        windowsFilenames?: boolean,
        noWindowsFilenames?: boolean,
        trimFilenames?: string,
        noOverwrites?: boolean,
        forceOverwrites?: boolean,
        noForceOverwrites?: boolean,
        continue?: boolean,
        noContinue?: boolean,
        part?: boolean,
        noPart?: boolean,
        mtime?: boolean,
        writeDescription?: boolean,
        noWriteDescription?: boolean,
        writeInfoJson?: boolean,
        noWriteInfoJson?: boolean,
        writePlaylistMetafiles?: boolean,
        noWritePlaylistMetafiles?: boolean,
        cleanInfoJson?: boolean,
        noCleanInfoJson?: boolean,
        writeComments?: boolean,
        noWriteComments?: boolean,
        loadInfoJson?: string,
        cookies?: string,
        noCookies?: boolean,
        cookiesFromBrowser?: string,
        noCookiesFromBrowser?: string,
        cacheDir?: string,
        noCacheDir?: boolean,
        rmCacheDir?: boolean,

        /**
         * Thumbnail Options
         */
        writeThumbnail?: boolean,
        noWriteThumbnail?: boolean,
        writeAllThumbnails?: boolean,
        listThumbnails?: boolean,

        /**
         * Internet Shortcut Options
         */
        writeLink?: boolean,
        writeUrlLink?: boolean,
        writeWeblocLink?: boolean,
        writeDesktopLink?: boolean,

        /**
         * Verbosity and Simulation Options
         */
        quiet?: boolean,
        noWarnings?: boolean,
        simulate?: boolean,
        noSimulate?: boolean,
        ignoreNoFormatsError?: boolean,
        noIgnoreNoFormatsError?: boolean,
        skipDownload?: boolean,
        print?: string,
        printToFile?: string,
        dumpJson?: boolean,
        forceWriteArchive?: boolean,
        newline?: boolean,
        noProgress?: boolean,
        progress?: boolean,
        consoleTitle?: boolean,
        progressTemplate?: string,
        verbose?: boolean,
        dumpPages?: boolean,
        writePages?: boolean,
        printTraffic?: boolean,

        /**
         * Workarounds
         */
        encoding?: string,
        legacyServerConnect?: boolean,
        noCheckCertificates?: boolean,
        preferInsecure?: boolean,
        addHeader?: string[],
        bidiWorkaround?: boolean,
        sleepRequests?: number,
        sleepInterval?: number,
        maxSleepInterval?: number,
        sleepSubtitles?: number,

        /**
         * Video Format Options
         */
        format?: string,
        formatSort?: string,
        formatSortForce?: boolean,
        noFormatSortForce?: boolean,
        videoMultistreams?: boolean,
        noVideoMultistreams?: boolean,
        audioMultistreams?: boolean,
        noAudioMultistreams?: boolean,
        preferFreeFormats?: boolean,
        noPreferFreeFormats?: boolean,
        checkFormats?: boolean,
        checkAllFormats?: boolean,
        noCheckFormats?: boolean,
        listFormats?: boolean,
        mergeOutputFormat?: string,

        /**
         * Subtitle Options
         */
        writeSubs?: boolean,
        noWriteSubs?: boolean,
        writeAutoSubs?: boolean,
        noWriteAutoSubs?: boolean,
        listSubs?: boolean,
        subFormat?: string,
        subLangs?: string,

        /**
         * Authentication Options
         */
        username?: string,
        password?: string,
        twofactor?: string,
        netrc?: boolean,
        netrcLocation?: string,
        videoPassword?: string,
        apMso?: string,
        apUsername?: string,
        apPassword?: string,
        apListMso?: boolean,
        clientCertificate?: string,
        clientCertificateKey?: string,
        clientCertificatePassword?: string,

        /**
         * Post-Processing Options
         */
        extractAudio?: boolean,
        audioFormat?: string,
        audioQuality?: string,
        remuxAudio?: string,
        recodeVideo?: string,
        postprocessorArgs?: string,
        keepVideo?: boolean,
        noKeepVideo?: boolean,
        postOverwrites?: boolean,
        noPostOverwrites?: boolean,
        embedSubs?: boolean,
        noEmbedSubs?: boolean,
        embeedThumbnail?: boolean,
        noEmbeedThumbnail?: boolean,
        embedMetadata?: boolean,
        noEmbedMetadata?: boolean,
        embedChapters?: boolean,
        noEmbedChapters?: boolean,
        embedInfoJson?: boolean,
        noEmbedInfoJson?: boolean,
        parseMetadata?: string,
        replaceInMetadata?: string,
        xattrs?: boolean,
        concatPlaylist?: string,
        fixup?: string,
        ffmpegLocation?: string,
        exec?: string,
        noExec?: boolean,
        convertSubs?: string,
        convertThumbnails?: string,
        splitChapters?: boolean,
        noSplitChapters?: boolean,
        removeChapters?: string,
        noRemoveChapters?: boolean,
        forceKeyframesAtCuts?: boolean,
        noForceKeyframesAtCuts?: boolean,
        usePostprocessor?: string,
        
        /**
         * SponsorBlock Options
         */
        sponsorblockMark?: string,
        sponsorblockRemove?: string,
        sponsorblockChapterTitle?: string,
        noSponsorblock?: boolean,
        sponsorblockApi?: string,

        /**
         * Extractor Options
         */
        extractorRetries?: string,
        allowDynamicMpd?: boolean,
        ignoreDynamicMpd?: boolean,
        hlsSplitDiscontinuity?: boolean,
        noHlsSplitDiscontinuity?: boolean,
        extractorArgs?: string,

        /**
         * etc / deprecateds
         */
        playlistStart?: number,
        playlistEnd?: number | 'last',
        forceGenericExtractor?: boolean,
        matchTitle?: string,
        rejectTitle?: string,
        minViews?: number,
        maxViews?: number,
        includeAds?: boolean,
        noResizeBuffer?: boolean,
        playlistReverse?: boolean,
        hlsPreferNative?: boolean,
        hlsPreferFfmpeg?: boolean,
        externalDownloader?: string,
        externalDownloaderArgs?: string,
        id?: boolean,
        autonumberStart?: number,
        noMtime?: boolean,
        writeAnnotations?: boolean,
        getUrl?: boolean,
        getTitle?: boolean,
        getId?: boolean,
        getThumbnail?: boolean,
        getDuration?: boolean,
        getFilename?: boolean,
        getFormat?: boolean,
        dumpSingleJson?: boolean,
        printJson?: boolean,
        callHome?: boolean,
        userAgent?: string,
        referer?: string,
        allFormats?: boolean,
        youtubeSkipDashManifest?: boolean,
        writeSub?: boolean,
        writeAutoSub?: boolean,
        allSubs?: boolean,
        subLang?: string,
        embedThumbnail?: boolean,
        addMetadata?: boolean,
        metadataFromFile?: string,
        preferAvconv?: boolean,
        preferFfmpeg?: boolean,
    }

    type YtdlExecFunction = (url: string, flags?: YtFlags, options?: Options<string>) => ExecaChildProcess;
    type YtdlCreateFuncion = (binaryPath: string) => {
      (url: string, flags?: YtFlags, options?: Options<string>): Promise<YtResponse>,
      exec: YtdlExecFunction,
    }

    const youtubeDl: (
      (url: string, flags?: YtFlags, options?: Options<string>) => Promise<YtResponse>
    ) & {
      exec: YtdlExecFunction,
      create: YtdlCreateFuncion,
    }

    export default youtubeDl;
    export function exec(...[url, flags, options]: Parameters<YtdlExecFunction>): ReturnType<YtdlExecFunction>;
    export function create(...[binaryPath]: Parameters<YtdlCreateFuncion>): ReturnType<YtdlCreateFuncion>;
}
