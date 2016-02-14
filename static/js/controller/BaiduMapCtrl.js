/**
 * Created by shenzp on 2016/2/14.
 */
angular.module('BaiduMapModule',[])
    .controller('BaiduMapCtrl', ['$scope', function ($scope) {

        var map;

        // �ٶȵ�ͼAPI
        map = new BMap.Map('l-map', {minZoom:15}); //��ʼ����ͼ���涨��С����
        map.centerAndZoom(new BMap.Point(113.402364,23.056676), 16); //��ʾ����
        map.enableScrollWheelZoom(); //���ù�������
        var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});//���Ͻ�ƽ�ƺ����Ű�ť
        // map.addControl(top_right_navigation);
        /* ���������˵�ͼ�߽磬����ק��ͼ����������ѧ�ǡ���Χʱ��ͼ���Զ����أ�����ʹ��ƽ�ư�ťʱ�����ܻ�����Լ����Լ��Ͼ��������� */
        var b = new BMap.Bounds(new BMap.Point(113.363465,23.033239),new BMap.Point(113.42225,23.081655));
        try {
            BMapLib.AreaRestriction.setBounds(map, b); //���ñ߽�
        } catch (e) {
            alert(e);
        }




        $scope.go = function() {
            document.getElementById('r-result').innerHTML = '';
            map.clearOverlays(); //��յ�ͼ���б�ע
            var local = new BMap.LocalSearch(map, {
                renderOptions:{
                    map: map,
                    panel: 'results'
                }
            });
            var b = new BMap.Bounds(new BMap.Point(113.363465,23.033239),new BMap.Point(113.42225,23.081655));
            BMapLib.AreaRestriction.setBounds(map, b);
            var s_marker = null; //���marker
            var e_marker = null; //�յ�marker
            local.searchInBounds($scope.init, map.getBounds()); //�ڡ���ѧ�ǡ���Χ�ڽ�������
            local.setMarkersSetCallback(function (pois) { //����marker�Ļص�����
                for(var i = 0; i < pois.length; i++){
                    var marker = pois[i].marker;
                    marker.addEventListener('click', function(){ //��Ӽ����¼�
                        marker_trick = true;
                        var pos = this.getPosition();
                        setAdress_s(pos.lng, pos.lat);
                    });
                }
            })
            function setAdress_s(s_lng, s_lat) {
                if (confirm('��Ϊ��㣿')) {
                    map.clearOverlays();
                    s_marker = new BMap.Marker(new BMap.Point(s_lng, s_lat));
                    map.addOverlay(s_marker); //������ע
                    local.searchInBounds($scope.ended, map.getBounds());
                    local.setMarkersSetCallback(function (pois) {
                        //�˺���д��setAdress_s���汣֤�������������������յ�
                        for(var i = 0; i < pois.length; i++){
                            var e_marker = pois[i].marker;
                            e_marker.addEventListener('click', function(){
                                marker_trick = true;
                                var pos = this.getPosition();
                                setAdress_e(pos.lng, pos.lat);
                            });
                        }
                    })

                    function setAdress_e(e_lng, e_lat) {
                        if (confirm('��Ϊ�յ㣿')) {
                            map.clearOverlays();
                            e_marker = new BMap.Marker(new BMap.Point(e_lng, e_lat));
                            map.addOverlay(e_marker);

                            var transit = new BMap.TransitRoute(map, {
                                renderOptions: {
                                    map: map,
                                    panel: 'r-result' //�������ʾ��$('#r-result')��
                                }
                            });
                            transit.search(s_marker.getPosition(), e_marker.getPosition()); //������·��ѯ
                        }
                    }
                }
            }
        }
    }]);