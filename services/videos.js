const Db = require('../lib/db');

class videosService{
    constructor(){
        this.collection = 'videos';
        this.db = new Db();
    }
    async getVideos({ tags }){
        const videos = await this.db.getAll(this.collection, tags);
        return videos || [];
    }
    async getVideo({ videoId }){
        const video = await this.db.get(this.collection, videoId);
        return video || {};
    }
    async createVideo({ video }){
        const videoId = await this.db.create(this.collection, video);
        return videoId;
    }
    async updateVideo({ videoId, video }){
        const updatedId = await this.db.update(this.collection, videoId, video);
        return updatedId;
    }
    async deleteVideo({ videoId }){
        const deletedId = await this.db.delete(this.collection, videoId);
        return deletedId;
    }
}

module.exports = videosService;