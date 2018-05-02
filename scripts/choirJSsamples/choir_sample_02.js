/*
 * Copyright 2013 Antonio Carrasco Valero
 */

var aM_ScoreSample = function(m_Functionx, m_Log, m_Builders) {

    var _displayName ='m_Choir_Score_Sample_02';

    var _doc = '';



    var fScoreSample_02 = function() {


        var aScoreOutline =  [
            [   'Voice: Main',
                [   'Simultaneous: First',
                    [   'Sequence: One',
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: One-1")
                        })._sUUID('94bb6a35-bed2-4502-a09b-b2924bc18435'),
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: One-2")
                        })._sUUID('9e4c978f-fec4-4d2a-aa3e-d09ed01ca3af')
                    ],
                    [   'Sequence: Two',
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: Two-1")
                        })._sUUID('6296026b-94e5-474b-8e79-00efc58a08e4'),
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: Two-2")
                        })._sUUID('6c0e30a3-571e-44b8-b8e2-ef8ce074f612')
                    ],
                    'Sequence: One',
                    'Sequence: Two',
                    'Sequence: Two',
                    'Sequence: One'
                ],
                [   'Sequence: Second',
                    [   'Sequence: Three',
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: Three-1")
                        })._sUUID('94bb6a35-bed2-4502-a09b-b2924bc18435'),
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: Three-2")
                        })._sUUID('9e4c978f-fec4-4d2a-aa3e-d09ed01ca3af')
                    ],
                    [   'Sequence: Four',
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: Four-1")
                        })._sUUID('6296026b-94e5-474b-8e79-00efc58a08e4'),
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: Four-2")
                        })._sUUID('6c0e30a3-571e-44b8-b8e2-ef8ce074f612')
                    ]
                ],
                'Sequence: Second/Three',
                'Sequence: Second/Four'
            ],
            [   'Voice: Chorus',
                [   'Sequence: ChorusFirst',
                    [   'Sequence: CFOne',
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: CFOne-1")
                        })._sUUID('17b0c5e9-08a5-41e0-a6ea-6b0a85e77325'),
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: CFOne-2")
                        })._sUUID('3b7f50ec-ee32-4fe6-9cb6-03ec2fa879de')
                    ],
                    [   'Sequence: CFTwo',
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: CFTwo-1")
                        })._sUUID('6296026b-94e5-474b-8e79-00efc58a08e4'),
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: CFTwo-2")
                        })._sUUID('6c0e30a3-571e-44b8-b8e2-ef8ce074f612')
                    ]
                ],
                [ 'Sequence: ChorusSecond',
                    [   'Sequence: CFThree',
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: CFThree-1")
                        })._sUUID('94bb6a35-bed2-4502-a09b-b2924bc18435'),
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: CFThree-2")
                        })._sUUID('9e4c978f-fec4-4d2a-aa3e-d09ed01ca3af')
                    ],
                    [   'Sequence: CFFour',
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: CFFour-1")
                        })._sUUID('6296026b-94e5-474b-8e79-00efc58a08e4'),
                        (function(theNC) {
                            if(theNC) {}
                            m_Log.pLog("Sequence: CFFour-2")
                        })._sUUID('6c0e30a3-571e-44b8-b8e2-ef8ce074f612')
                    ]
                ]
            ]
        ];

        var aBuilder = m_Builders.fBuilderNamed( 'Arrays');
        if (!aBuilder) {
            return null;
        }
        var aScore=aBuilder.fBuildFrom( aScoreOutline);
        if(aScore) {}
        return aScore;
    };
    fScoreSample_02._sDoc('fScoreSample_02', 'Create an instance of Score to be used in tests.')._sUUID('c3351d82-22fe-487b-b0c8-833e63199d51');
    _doc+=('\n\n' +  fScoreSample_02._doc);



    /* Module members */
    var aModule = {
        _v_Type: 'Module',

        displayName: _displayName,
        _doc: _doc,

        fScoreSample_02: fScoreSample_02,
        ScoreSample_02:  fScoreSample_02()
    };
    if(aModule) {}
    return aModule;
};





if( typeof define === 'function') {
    define(['m_Functionx', 'm_Outline', 'm_Log'], function(m_Functionx, m_Log, m_Builders) {

        return aM_ScoreSample(m_Functionx,  m_Log, m_Builders);
    });
}
else {

    if( typeof gChoirJS_Modules === 'object') {
        gChoirJS_Modules[aM_ScoreSample.displayName]=aM_ScoreSample(
            gChoirJS_Modules['m_Functionx'],
            gChoirJS_Modules['m_Log'],
            gChoirJS_Modules['m_Builders']
        );
    }
    else {
        ChoirJS_Module_Samples_Score_Sample_02 = aM_ScoreSample(
            ChoirJS_Module_Functionx,
            ChoirJS_Module_Log,
            ChoirJS_Module_Builders
        );
    }
}
